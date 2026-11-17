export const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const hasFinePointer = () =>
    window.matchMedia('(pointer: fine)').matches;
