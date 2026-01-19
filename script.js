// --- PART 1: TABS & LIGHTBOX (Run these immediately) ---
function setupInteractions() {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.tab-content > section');

    tabs.forEach(btn => {
        btn.onclick = () => {
            tabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const target = btn.dataset.tab;
            sections.forEach(sec => {
                sec.style.display = (sec.id === target) ? 'block' : 'none';
            });
        };
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('section img').forEach(img => {
        img.onclick = () => {
            if (lightbox && lightboxImg) {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            }
        };
    });

    if (lightboxClose) {
        lightboxClose.onclick = () => { lightbox.style.display = 'none'; };
    }

    if (lightbox) {
        lightbox.onclick = (e) => {
            if (e.target === lightbox) lightbox.style.display = 'none';
        };
    }
}

// --- PART 2: LOADING SCREEN & PERFORMANCE ---
document.addEventListener("DOMContentLoaded", () => {
    setupInteractions();

    const images = document.querySelectorAll('section img');
    const videos = document.querySelectorAll('video');
    const loader = document.getElementById('loading-screen');
    const counterDisplay = document.getElementById('load-counter');
    const progressFill = document.getElementById('progress-fill');

    let totalItems = images.length + videos.length;
    let loadedCount = 0;

    if (counterDisplay) counterDisplay.innerText = `0 / ${totalItems}`;

    function updateProgress() {
        loadedCount++;
        if (counterDisplay) counterDisplay.innerText = `${loadedCount} / ${totalItems}`;
        if (progressFill) {
            let percentage = (loadedCount / totalItems) * 100;
            progressFill.style.width = percentage + "%";
        }
        if (loadedCount >= totalItems) { hideLoader(); }
    }

    function hideLoader() {
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => { 
                loader.style.display = "none"; 
                loader.style.pointerEvents = "none"; 
            }, 500);
        }
    }

    images.forEach(img => {
        if (img.complete) updateProgress();
        else { img.onload = updateProgress; img.onerror = updateProgress; }
    });

    videos.forEach(v => {
        v.onloadeddata = updateProgress;
        v.onerror = updateProgress;
    });
    
    setTimeout(hideLoader, 10000); 

    // --- VIDEO PERFORMANCE FIX: Play only when visible ---
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(() => {
                    // Prevents errors if browser blocks autoplay
                });
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.1 }); // Starts playing as soon as 10% of the video is seen

    videos.forEach(v => videoObserver.observe(v));
});
