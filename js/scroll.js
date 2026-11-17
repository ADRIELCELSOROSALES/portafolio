import { prefersReducedMotion } from './motion.js';

// Visibilidad del botón "volver arriba"
function initBackToTop() {
    const backTop = document.getElementById('backTop');
    if (!backTop) return;
    let scrollPending = false;
    window.addEventListener('scroll', () => {
        if (scrollPending) return;
        scrollPending = true;
        requestAnimationFrame(() => {
            backTop.classList.toggle('show', window.scrollY > 400);
            scrollPending = false;
        });
    }, { passive: true });
}

// Scroll suave para anclajes
function initAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
            }
        });
    });
}

export function initScroll() {
    initBackToTop();
    initAnchorScroll();
}
