const EMAIL = 'adrielrosales1999@gmail.com';

// Copiar email al portapapeles
function copyEmail(e) {
    e.preventDefault();
    const notif = document.getElementById('copyNotif');
    const flash = () => {
        notif?.classList.add('show');
        setTimeout(() => notif?.classList.remove('show'), 2500);
    };
    navigator.clipboard.writeText(EMAIL).then(flash).catch(() => {
        // Sin permiso de portapapeles: abrir el cliente de correo
        window.location.href = `mailto:${EMAIL}`;
    });
}

export function initContact() {
    document.querySelectorAll('a.contact-email').forEach(a => {
        a.addEventListener('click', copyEmail);
    });
}
