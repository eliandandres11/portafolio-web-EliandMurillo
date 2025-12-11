// Función principal para animar elementos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {

    // 1. Animar las barras de habilidades (Progress Bars)
    const animateSkills = () => {
        document.querySelectorAll('.progress-bar-value').forEach(bar => {
            const target = bar.getAttribute('data-value') || "0";
            // Asegura que la barra inicie en 0%
            bar.style.width = '0%';
            // Aplica el ancho objetivo después de un pequeño retraso para activar la transición CSS
            setTimeout(() => {
                bar.style.width = target + '%';
            }, 500); // 500ms de retraso para que el usuario note el inicio
        });
    };

    // 2. Animar el contador de porcentaje de los gráficos de idiomas
    const animateLanguageCharts = () => {
        document.querySelectorAll('.language-chart').forEach(chart => {
            let value = parseInt(chart.getAttribute('data-percent')) || 0;
            let percentElement = chart.querySelector('.lang-percent');
            let current = 0;
            // Controla la velocidad de la animación
            let step = Math.ceil(value / 60);

            const updateCount = () => {
                if (current < value) {
                    current += step;
                    if (current > value) current = value; // Asegura no exceder el valor final
                    percentElement.textContent = current + '%';
                    requestAnimationFrame(updateCount);
                }
            }

            // Inicia el contador
            updateCount();
        });
    };

    // Usar IntersectionObserver para activar las animaciones solo cuando son visibles
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Activar animación de Habilidades
                if (entry.target.id === 'habilidades') {
                    animateSkills();
                    observer.unobserve(entry.target); // Dejar de observar después de la animación
                }
                // Activar animación de Idiomas
                if (entry.target.id === 'certificaciones') {
                    animateLanguageCharts();
                    observer.unobserve(entry.target); // Dejar de observar después de la animación
                }
            }
        });
    }, {
        root: null, // Observar en el viewport
        threshold: 0.1 // Activar cuando el 10% del elemento sea visible
    });

    // Observar las secciones que contienen las animaciones
    const skillsSection = document.getElementById('habilidades');
    const certsSection = document.getElementById('certificaciones');

    if (skillsSection) observer.observe(skillsSection);
    if (certsSection) observer.observe(certsSection);
});