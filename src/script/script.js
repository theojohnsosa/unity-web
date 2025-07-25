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

document.addEventListener('DOMContentLoaded', function() {
    const faq1 = document.querySelector('.faq-1');
    if (faq1) {
        faq1.style.width = '100%';
    }

    const faq2 = document.querySelector('.faq-2');
    if (faq2) {
        faq2.style.width = '100%';
    }

    const faq3 = document.querySelector('.faq-3');
    if (faq3) {
        faq3.style.width = '100%';
    }

    const faq4 = document.querySelector('.faq-4');
    if (faq4) {
        faq4.style.width = '100%';
    }

    const faq5 = document.querySelector('.faq-5');
    if (faq5) {
        faq5.style.width = '100%';
    }

    const faq6 = document.querySelector('.faq-6');
    if (faq6) {
        faq6.style.width = '100%';
    }

    const faqPanels = document.querySelectorAll('.faq-panel');
    faqPanels.forEach(panel => {
        panel.style.display = 'none';
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const panel = question.nextElementSibling;
            if (panel && panel.classList.contains('faq-panel')) {
                const isOpening = (panel.style.display === 'none' || panel.style.display === '');
                panel.style.display = isOpening ? 'block' : 'none';

                const parentFaq1 = question.closest('.faq-1');
                if (parentFaq1) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq2 = question.closest('.faq-2');
                if (parentFaq2) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq3 = question.closest('.faq-3');
                if (parentFaq3) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq4 = question.closest('.faq-4');
                if (parentFaq4) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq5 = question.closest('.faq-5');
                if (parentFaq5) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq6 = question.closest('.faq-6');
                if (parentFaq6) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionMap = {
        'Overview': '.overview-section',
        'Features': '.features-section',
        'Demo': '.demo-section',
        'Notes': '.devnotes-section', 
        'FAQs': '.faqs-section' 
    };

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = link.textContent.trim();
            const sectionSelector = sectionMap[linkText];
            if (sectionSelector) {
                const section = document.querySelector(sectionSelector);
                if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionMap = {
        'View Demo': '.demo-section'
    };

    const navLinks = document.querySelectorAll('.cta-buttons-container a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = link.textContent.trim();
            const sectionSelector = sectionMap[linkText];
            if (sectionSelector) {
                const section = document.querySelector(sectionSelector);
                if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionMap = {
        'Key Features': '.features-section'
    };

    const navLinks = document.querySelectorAll('.overview-content-container a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = link.textContent.trim();
            const sectionSelector = sectionMap[linkText];
            if (sectionSelector) {
                const section = document.querySelector(sectionSelector);
                if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionMap = {
        'Overview': '.overview-section',
        'Features': '.features-section',
        'Demo': '.demo-section',
        'Notes': '.devnotes-section', 
        'FAQs': '.faqs-section' 
    };

    const navLinks = document.querySelectorAll('.navigation-container a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = link.textContent.trim();
            const sectionSelector = sectionMap[linkText];
            if (sectionSelector) {
                const section = document.querySelector(sectionSelector);
                if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

const creatorEmailFooter = document.querySelector('.email-link');
if (creatorEmailFooter) {
    creatorEmailFooter.style.cursor = 'pointer';
    creatorEmailFooter.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'mailto:theojohnsosa@gmail.com';
    });
}