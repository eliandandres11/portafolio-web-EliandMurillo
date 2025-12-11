document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Activar animación de Idiomas (Sidebar)
                if (entry.target.id === 'idiomas') {
                    animateLanguageBars();
                    observer.unobserve(entry.target);
                }
                // 2. Activar animación de Habilidades (Radial Progress)
                if (entry.target.id === 'habilidades-tech') {
                    animateRadialProgress();
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        root: null,
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    });

    // Función para animar barras simples (Idiomas)
    const animateLanguageBars = () => {
        document.querySelectorAll('.language-progress-bars .bar-fill').forEach(bar => {
            const level = bar.getAttribute('data-level');
            // Usamos el pseudo-elemento ::after para la barra que se llena
            bar.style.setProperty('--target-width', level + '%');
            
            // Aplicamos la transición CSS al pseudo-elemento
            bar.style.setProperty('width', level + '%');
            // El truco está en usar CSS para la animación, aquí solo cambiamos la propiedad
            bar.querySelector('::after').style.width = level + '%'; // Esto no funciona bien en JS
        });

        // Solución CSS más simple para la barra de idioma
        document.querySelectorAll('.language-progress-bars .bar-fill').forEach(bar => {
            const level = bar.getAttribute('data-level');
            const styleElement = bar.querySelector('::after');
            
            // Re-aplicar width directamente para usar la transición CSS
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 500);
        });

        // Dado que la animación de pseudo-elemento es compleja en JS, 
        // usaremos una solución simple en el CSS para la V2:
        // Se añade un estilo de relleno animado simple en CSS:
        document.querySelectorAll('.language-progress-bars .bar-fill').forEach(bar => {
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 500);
        });
        
    };
    
    // Función para animar el Progreso Radial (Habilidades Técnicas)
    const animateRadialProgress = () => {
        document.querySelectorAll('.radial-progress').forEach(chart => {
            const percent = parseInt(chart.getAttribute('data-percent'));
            
            // La animación se hace usando CSS conic-gradient
            // 1. Establecer el valor inicial (0%)
            chart.style.background = `conic-gradient(var(--clr-accent) 0%, var(--clr-border-light) 0%)`;

            // 2. Aplicar el valor final con un pequeño retraso
            setTimeout(() => {
                // Se usa una transición JS para simular el llenado si el CSS no soporta la transición directa en el conic-gradient
                const duration = 1500; // 1.5 segundos
                const start = performance.now();
                
                const update = (currentTime) => {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1); // 0 a 1
                    const currentDegree = progress * (percent * 3.6); // 3.6 grados por porcentaje
                    
                    chart.style.background = 
                        `conic-gradient(
                            var(--clr-accent) ${currentDegree}deg, 
                            var(--clr-border-light) ${currentDegree}deg
                        )`;
                    
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                };

                requestAnimationFrame(update);
            }, 600); // Retraso para que el usuario lo vea
        });
    };

    // Observar las nuevas secciones
    const languageSection = document.getElementById('idiomas');
    const technicalSkillsSection = document.getElementById('habilidades-tech');

    if (languageSection) observer.observe(languageSection);
    if (technicalSkillsSection) observer.observe(technicalSkillsSection);
});