document.addEventListener('DOMContentLoaded', () => {

    // Función para animar las barras de idioma (simples)
    const animateLanguageBarsV3 = () => {
        document.querySelectorAll('.lang-skill-v3').forEach(bar => {
            const level = bar.getAttribute('data-level') || "0";
            
            // Usamos el pseudo-elemento ::after para la barra que se llena (usando CSS)
            // Aquí solo aplicamos la propiedad width al pseudo-elemento (se maneja en CSS con transition)
            // NOTA: La manipulación de pseudo-elementos es compleja o imposible directamente en JS.
            // La solución más simple y estándar es usar una propiedad personalizada o una clase.
            
            // Alternativa: Usar la propiedad width directamente en el elemento padre para que el CSS ::after use esa propiedad.
            // Dado que el CSS ya está preparado con `::after`, solo necesitamos activar la transición:
            setTimeout(() => {
                // Inyectamos el estilo para activar la transición del ::after en CSS
                // Creamos un elemento <style> temporal o usamos una clase
                bar.style.setProperty('--target-width', level + '%');
            }, 600);
            
            // La forma más limpia es usar una clase y CSS puro, pero para este formato
            // activaremos la transición del width del ::after mediante CSS simple.
            // **Nota:** El CSS de V3 usa un `::after` simple que se anima cuando se le da width.
        });
        
        // Dado que el CSS en V3 usa ::after con width: 0 y transition, 
        // y para activar la transición necesitamos forzar un cambio de estilo.
        document.querySelectorAll('.lang-skill-v3').forEach(bar => {
             const level = bar.getAttribute('data-level') || "0";
             // Creamos un <style> interno para forzar la propiedad, ya que el JS directo al ::after no funciona.
             // La mejor solución es CSS puro:
             const style = document.createElement('style');
             style.textContent = `
                .lang-skill-v3[data-level="${level}"]::after {
                    width: ${level}%;
                }
             `;
             document.head.append(style);
        });
    };

    // Usar IntersectionObserver para activar la animación de idiomas
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('sidebar-v3')) {
                    animateLanguageBarsV3();
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    const sidebar = document.querySelector('.sidebar-v3');
    if (sidebar) observer.observe(sidebar);
});