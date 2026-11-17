// Se ejecuta de forma sincrónica en <head>: aplica el tema antes del primer paint
(function () {
    var theme;
    try { theme = localStorage.getItem('theme'); } catch (e) { /* sin storage */ }
    if (theme !== 'light' && theme !== 'dark') {
        theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f6f3' : '#0e0f11');
})();
