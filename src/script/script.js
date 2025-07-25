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

const ctaDemoBtn = document.getElementById('cta-demo-button');
if (ctaDemoBtn) {
    const borderGlow = document.createElement('span');
    borderGlow.style.position = 'absolute';
    borderGlow.style.top = 0;
    borderGlow.style.left = 0;
    borderGlow.style.width = '100%';
    borderGlow.style.height = '100%';
    borderGlow.style.borderRadius = '10px';
    borderGlow.style.pointerEvents = 'none';
    borderGlow.style.boxSizing = 'border-box';
    borderGlow.style.zIndex = 0;
    borderGlow.style.background = 'conic-gradient(from 0deg, rgba(255,255,255,0.25) 0deg, rgba(255,255,255,0.7) 90deg, rgba(255,255,255,0.25) 180deg, rgba(255,255,255,0.7) 270deg, rgba(255,255,255,0.25) 360deg)';
    borderGlow.style.filter = 'blur(2.5px) drop-shadow(0 0 6px #fff)';
    borderGlow.style.transition = 'opacity 0.2s';
    borderGlow.style.opacity = '1';

    ctaDemoBtn.style.position = 'relative';
    ctaDemoBtn.style.overflow = 'visible';

    Array.from(ctaDemoBtn.childNodes).forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            node.style.position = 'relative';
            node.style.zIndex = 1;
        }
    });

    if (ctaDemoBtn.childNodes.length === 1 && ctaDemoBtn.childNodes[0].nodeType === Node.TEXT_NODE) {
        const textSpan = document.createElement('span');
        textSpan.textContent = ctaDemoBtn.textContent;
        textSpan.style.position = 'relative';
        textSpan.style.zIndex = 1;
        ctaDemoBtn.textContent = '';
        ctaDemoBtn.appendChild(textSpan);
    }

    ctaDemoBtn.insertBefore(borderGlow, ctaDemoBtn.firstChild);

    let angle = 0;
    let running = true;
    function animateBorder() {
        if (!running) return;
        angle = (angle + 1.2) % 360;
        borderGlow.style.background = `conic-gradient(from ${angle}deg, rgba(255,255,255,0.25) 0deg, rgba(255,255,255,0.7) 90deg, rgba(255,255,255,0.25) 180deg, rgba(255,255,255,0.7) 270deg, rgba(255,255,255,0.25) 360deg)`;
        requestAnimationFrame(animateBorder);
    }
    animateBorder();

    ctaDemoBtn.addEventListener('mouseenter', () => {
        borderGlow.style.opacity = '0';
    });
    ctaDemoBtn.addEventListener('mouseleave', () => {
        borderGlow.style.opacity = '1';
    });
}