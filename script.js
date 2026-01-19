// --- PART 1: TABS & LIGHTBOX ---
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

    if (lightboxClose) lightboxClose.onclick = () => { lightbox.style.display = 'none'; };
    if (lightbox) lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.style.display = 'none'; };
}

// --- PART 2: LOADING SCREEN & AUTO-PLAY ---
document.addEventListener("DOMContentLoaded", () => {
    // FIX: Force Resource Packs to be the visible section on startup
    const sections = document.querySelectorAll('.tab-content > section');
    const tabs = document.querySelectorAll('.tab-btn');
    
    sections.forEach(s => s.style.display = 'none'); // Hide all
    const resourceSection = document.getElementById('resource');
    if (resourceSection) resourceSection.style.display = 'block'; // Show Resource
    
    // Ensure the Resource tab button looks active
    tabs.forEach(t => t.classList.remove('active'));
    const resourceBtn = document.querySelector('[data-tab="resource"]');
    if (resourceBtn) resourceBtn.classList.add('active');

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
        if (loadedCount >= totalItems) hideLoader();
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

    // Load Images
    images.forEach(img => {
        if (img.complete) updateProgress();
        else { img.onload = updateProgress; img.onerror = updateProgress; }
    });

    // Load and Play Videos Immediately (Natural Loading)
    videos.forEach(v => {
        // We use loadedmetadata for videos so they count toward progress faster
        v.onloadedmetadata = updateProgress;
        v.onerror = updateProgress;
        
        // This attempts to play as soon as the browser allows
        v.play().catch(() => {
            // Silently handle if browser requires a click first
        });
    });
    
    setTimeout(hideLoader, 10000); // Safety timeout
});
