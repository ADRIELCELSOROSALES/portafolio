import es from './i18n/es.js';
import en from './i18n/en.js';

const KEY = 'lang';
const DICTS = { es, en };

function initialLang() {
    try {
        const v = localStorage.getItem(KEY);
        if (v === 'es' || v === 'en') return v;
    } catch { /* sin storage */ }
    const nav = (navigator.language || '').toLowerCase();
    if (nav) return nav.startsWith('es') ? 'es' : 'en';
    return 'es';
}

// Los textos de data-i18n-html vienen de es.js/en.js (propios), nunca de datos externos
function apply(lang) {
    const dict = DICTS[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const t = dict[el.dataset.i18n];
        if (t !== undefined) el.textContent = t;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const t = dict[el.dataset.i18nHtml];
        if (t !== undefined) el.innerHTML = t;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const t = dict[el.dataset.i18nAlt];
        if (t !== undefined) el.setAttribute('alt', t);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const t = dict[el.dataset.i18nAria];
        if (t !== undefined) el.setAttribute('aria-label', t);
    });
    document.querySelectorAll('[data-i18n-content]').forEach(el => {
        const t = dict[el.dataset.i18nContent];
        if (t !== undefined) el.setAttribute('content', t);
    });
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
}

// Idioma ES/EN: el español queda en el HTML; solo se reemplaza si hace falta
export function initI18n() {
    const lang = initialLang();
    if (lang !== 'es') apply(lang);
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            const next = btn.dataset.lang;
            apply(next);
            try { localStorage.setItem(KEY, next); } catch { /* sin storage */ }
        });
    });
}
