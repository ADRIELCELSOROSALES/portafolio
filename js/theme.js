const KEY = 'theme';
const COLORS = { dark: '#0e0f11', light: '#f6f6f3' };

function stored() {
    try {
        const v = localStorage.getItem(KEY);
        return v === 'light' || v === 'dark' ? v : null;
    } catch { return null; }
}

function apply(theme, toggle) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COLORS[theme]);
    // aria-pressed="true" = tema oscuro activo
    toggle?.setAttribute('aria-pressed', String(theme === 'dark'));
}

// Tema claro/oscuro: sigue al sistema hasta que el usuario elige uno
export function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const current = () => document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    apply(current(), toggle);

    toggle?.addEventListener('click', () => {
        const next = current() === 'light' ? 'dark' : 'light';
        apply(next, toggle);
        try { localStorage.setItem(KEY, next); } catch { /* sin storage */ }
    });

    mq.addEventListener?.('change', e => {
        if (!stored()) apply(e.matches ? 'light' : 'dark', toggle);
    });
}
