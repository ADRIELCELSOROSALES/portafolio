import { prefersReducedMotion, hasFinePointer } from './motion.js';

// Luz que sigue al cursor (solo con mouse)
export function initSpotlight() {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight || !hasFinePointer() || prefersReducedMotion()) return;
    let spotPending = false;
    window.addEventListener('mousemove', e => {
        if (spotPending) return;
        spotPending = true;
        requestAnimationFrame(() => {
            spotlight.style.setProperty('--x', e.clientX + 'px');
            spotlight.style.setProperty('--y', e.clientY + 'px');
            spotPending = false;
        });
    }, { passive: true });
}
