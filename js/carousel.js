import Swiper from '../vendor/swiper/swiper-bundle.min.mjs';
import es from './i18n/es.js';
import en from './i18n/en.js';

const DICTS = { es, en };
const dict = () => DICTS[document.documentElement.lang] || es;

// Carrusel de "Otros proyectos" con Swiper (vendorizado) y controles propios
export function initCarousel() {
    const el = document.querySelector('.projects-swiper');
    const nav = document.querySelector('.carousel-nav');
    if (!el || !nav) return;
    const prev = nav.querySelector('[data-carousel="prev"]');
    const next = nav.querySelector('[data-carousel="next"]');
    const toggle = nav.querySelector('[data-carousel="toggle"]');
    if (!prev || !next || !toggle) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const swiper = new Swiper(el, {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 24,
        loop: true,                  // infinito (Swiper 11 reordena el DOM, sin clones)
        speed: 700,
        grabCursor: true,
        slideToClickedSlide: true,   // tocar una tarjeta vecina la centra
        autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: false },
        keyboard: { enabled: true, onlyInViewport: true },
        // slideRole 'listitem' conserva la semántica de lista del <ul role="list">
        a11y: { enabled: true, slideRole: 'listitem' },
        pagination: { el: el.querySelector('.swiper-pagination'), clickable: true }
    });

    // Solo dos razones para detener el autoplay: pausa manual y reduced-motion.
    // Swiper ya lo pausa solo con la pestaña oculta y durante el arrastre.
    let userPaused = false;   // pausa manual: no se reanuda sola

    function sync() {
        const run = !userPaused && !reduced.matches;
        if (run && !swiper.autoplay.running) swiper.autoplay.start();
        else if (!run && swiper.autoplay.running) swiper.autoplay.stop();
    }

    function labels() {
        const d = dict();
        const key = userPaused ? 'ui.play' : 'ui.pause';
        prev.setAttribute('aria-label', d['ui.prev']);
        next.setAttribute('aria-label', d['ui.next']);
        toggle.dataset.i18nAria = key;
        toggle.setAttribute('aria-label', d[key]);
        toggle.toggleAttribute('data-paused', userPaused);
        el.setAttribute('aria-label', d['ui.carousel']);
        el.querySelectorAll('.swiper-pagination-bullet').forEach((b, i) => {
            b.setAttribute('aria-label', (d['ui.goto'] || '{n}').replace('{n}', String(i + 1)));
        });
    }

    nav.hidden = false;
    prev.addEventListener('click', () => swiper.slidePrev());
    next.addEventListener('click', () => swiper.slideNext());
    toggle.addEventListener('click', () => {
        userPaused = !userPaused;
        labels();
        sync();
    });

    reduced.addEventListener('change', sync);

    swiper.on('paginationUpdate', labels);
    new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    // Las capturas son PNG pesados con loading="lazy": el navegador no cuenta como
    // "cerca" a las tarjetas fuera de pantalla y las pide tarde. Al acercarse a la
    // sección las pedimos todas y las decodificamos antes de que lleguen a verse.
    const warm = () => {
        el.querySelectorAll('img').forEach(img => {
            img.loading = 'eager';
            if (img.decode) img.decode().catch(() => {});
        });
    };
    new IntersectionObserver((entries, obs) => {
        if (entries.some(e => e.isIntersecting)) { warm(); obs.disconnect(); }
    }, { rootMargin: '1500px 0px' }).observe(el);

    labels();
    sync();
}
