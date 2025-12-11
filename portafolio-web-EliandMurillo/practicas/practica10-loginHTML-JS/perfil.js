document.addEventListener('DOMContentLoaded', function() {
    const usuario = localStorage.getItem('usuarioActual');
    const nombreUsuarioElement = document.getElementById('nombreUsuario');

    if (!usuario) {
        window.location.href = 'index.html';
        return;
    }
    nombreUsuarioElement.textContent = usuario.toUpperCase();

    document.querySelector('.data-point:last-child').textContent = `Último Acceso: ${new Date().toLocaleString()}`;
});

function cerrarSesion() {
    localStorage.removeItem('usuarioActual');
    window.location.href = 'index.html';
}