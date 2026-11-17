// Aparición al hacer scroll
export function initReveal() {
    const observer = new IntersectionObserver(
        entries => entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                observer.unobserve(e.target);
            }
        }),
        { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
