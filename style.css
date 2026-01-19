/* --- Global Styles --- */
* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}

body { 
    font-family: 'Press Start 2P', cursive; 
    background: #ececec; 
    color: #222; 
    padding: 20px; 
    line-height: 1.6;
}

/* --- Loading Screen --- */
#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10001;
    transition: opacity 0.5s ease;
}

.loader-container { text-align: center; color: #fff; }
.loader-container h1 { font-size: 1.2rem; margin-bottom: 20px; letter-spacing: 2px; }
.counter { font-size: 0.8rem; margin-bottom: 15px; color: #38e038; }

.progress-bar-bg {
    width: 300px;
    height: 20px;
    background: #333;
    border: 3px solid #555;
    padding: 2px;
    margin: 0 auto;
}

.progress-bar-fill {
    width: 0%;
    height: 100%;
    background: #38e038;
    transition: width 0.2s;
}

/* --- Header & Navigation --- */
header { text-align: center; padding: 30px 0; }
header h1 { font-size: 1.8rem; color: #2b2b2b; margin-bottom: 10px; }
header p { font-size: 0.6rem; color: #555; }

.nav-tabs { 
    display: flex; 
    justify-content: center; 
    gap: 15px; 
    margin-top: 20px; 
    flex-wrap: wrap;
}

.nav-tabs button { 
    background: #4a4a4a; 
    color: #fff; 
    border: 2px solid #2f2f2f; 
    border-radius: 4px; 
    padding: 10px 15px; 
    cursor: pointer; 
    font-size: 0.55rem; 
    transition: 0.2s; 
}

.nav-tabs button:hover { background: #5e5e5e; }
.nav-tabs button.active { background: #2f2f2f; border-color: #38e038; }

/* --- Content Sections --- */
.tab-content { max-width: 950px; margin: 30px auto; }

section { 
    display: none; 
    background: #f9f9f9; 
    border: 4px solid #bfbfbf; 
    border-radius: 6px; 
    padding: 25px; 
    margin-bottom: 30px; 
}

section#resource { display: block; } /* Default visible section */

section h2 { 
    font-size: 0.9rem; 
    color: #333; 
    border-bottom: 4px solid #bfbfbf; 
    padding-bottom: 10px; 
    margin-bottom: 20px; 
}

/* --- Videos & Images --- */
.video-stack video, section img {
    display: block;
    width: 100%;
    max-width: 700px;
    margin: 20px auto;
    border: 4px solid #bfbfbf;
    border-radius: 4px;
    background: #000;
}

.video-stack video {
    aspect-ratio: 16 / 9; /* Prevents freezing/jumping during load */
}

/* --- Buttons & Links --- */
.video-link-container {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.download-link { 
    display: inline-block; 
    padding: 12px 20px; 
    background: #4a4a4a; 
    color: #fff !important; 
    text-decoration: none; 
    border: 3px solid #2f2f2f; 
    border-radius: 4px; 
    font-size: 0.6rem; 
    transition: 0.2s; 
    text-align: center;
    min-width: 180px;
}

.download-link:hover { 
    background: #5e5e5e; 
    transform: translateY(-2px); 
    box-shadow: 0 4px 0 #2f2f2f;
}

.download-desc { font-size: 0.45rem; color: #666; margin-top: 8px; line-height: 1.4; }

/* --- Shaders Grid --- */
.shader-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    gap: 20px; 
    margin-top: 20px; 
}

.shader-item { 
    background: #f0f0f0; 
    border: 3px solid #bfbfbf; 
    border-radius: 6px; 
    padding: 15px; 
}

.shader-footer-text { 
    grid-column: 1 / -1; 
    text-align: center; 
    font-size: 0.55rem; 
    padding: 20px; 
}

/* --- Installation Cards --- */
.install-card {
    background: #fff;
    border: 3px solid #bfbfbf;
    border-radius: 8px;
    margin-bottom: 25px;
    overflow: hidden;
}

.install-header {
    background: #2f2f2f;
    color: #fff;
    padding: 12px 20px;
    font-size: 0.7rem;
}

.install-body { padding: 20px; font-size: 0.55rem; color: #444; }
.install-body p { margin-bottom: 12px; }

/* --- Community & Tips --- */
.community-info { 
    background: #f0f0f0; 
    border: 3px solid #bfbfbf; 
    border-radius: 6px; 
    padding: 20px; 
    font-size: 0.55rem; 
}

.pro-tip {
    background: #fff3cd;
    border: 2px dashed #856404;
    padding: 20px;
    border-radius: 6px;
    color: #856404;
}

/* --- Responsive Layout --- */
@media (max-width: 600px) {
    header h1 { font-size: 1.2rem; }
    .nav-tabs { flex-direction: column; }
    .nav-tabs button { width: 100%; }
    .download-link { width: 100%; }
}
