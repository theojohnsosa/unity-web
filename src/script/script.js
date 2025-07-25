const ctaBtn = document.getElementById('download-button');
if (ctaBtn) {
    const shine = document.createElement('span');
    shine.style.position = 'absolute';
    shine.style.top = 0;
    shine.style.left = '-75%';
    shine.style.width = '50%';
    shine.style.height = '100%';
    shine.style.background = 'linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.0) 100%)';
    shine.style.pointerEvents = 'none';
    shine.style.transform = 'skewX(-20deg)';
    shine.style.borderRadius = '100px';
    shine.style.transition = 'none';
    shine.style.zIndex = 2;
    shine.style.opacity = '0.7';

    ctaBtn.style.position = 'relative';
    ctaBtn.style.overflow = 'hidden';

    ctaBtn.appendChild(shine);

    function animateShine() {
        shine.style.transition = 'none';
        shine.style.left = '-75%';
        requestAnimationFrame(() => {
            setTimeout(() => {
                shine.style.transition = 'left 0.8s cubic-bezier(0.4,0,0.2,1)';
                shine.style.left = '120%';
            }, 50);
        });
    }

    animateShine();

    setInterval(animateShine, 2000);

    ctaBtn.addEventListener('mouseenter', animateShine);
}