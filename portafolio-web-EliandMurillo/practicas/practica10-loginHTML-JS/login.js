class Authenticator {
    constructor() {
        this.USUARIO_VALIDO = "admin";
        this.CONTRASENA_HASH = this.hashPassword("secure"); 
        this.loginForm = document.getElementById('loginForm');
        this.mensajeError = document.getElementById('mensajeError');
        this.init();
    }
    hashPassword(password) {
        return btoa(password).slice(0, 10);
    }

    handleLogin(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const contrasena = document.getElementById('contrasena').value;
        const hashedInput = this.hashPassword(contrasena);

        if (usuario === this.USUARIO_VALIDO && hashedInput === this.CONTRASENA_HASH) {
            localStorage.setItem('usuarioActual', usuario);
            this.mensajeError.textContent = "";
            this.mensajeError.classList.remove('active');
            window.location.href = 'perfil.html';
        } else {
            this.mensajeError.textContent = "Acceso denegado: Usuario o contraseña inválidos.";
            this.mensajeError.classList.add('active');
        }
    }

    init() {
        this.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Si ya existe una sesión, redirigir inmediatamente al perfil
    if (localStorage.getItem('usuarioActual')) {
        window.location.href = 'perfil.html';
    }
    new Authenticator();
});