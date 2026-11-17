import { prefersReducedMotion, hasFinePointer } from './motion.js';

// Inclinación 3D de las imágenes siguiendo al mouse
export function initTilt() {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    document.querySelectorAll('.project-img-wrap').forEach(wrap => {
        const target = wrap.firstElementChild;
        let tiltPending = false;
        wrap.addEventListener('mousemove', e => {
            if (tiltPending) return;
            tiltPending = true;
            const cx = e.clientX, cy = e.clientY;
            requestAnimationFrame(() => {
                const r = wrap.getBoundingClientRect();
                const px = (cx - r.left) / r.width - 0.5;
                const py = (cy - r.top) / r.height - 0.5;
                target.style.setProperty('--ry', (px * 14) + 'deg');
                target.style.setProperty('--rx', (-py * 14) + 'deg');
                tiltPending = false;
            });
        }, { passive: true });
        wrap.addEventListener('mouseleave', () => {
            target.style.setProperty('--ry', '0deg');
            target.style.setProperty('--rx', '0deg');
        });
    });
}
