document.addEventListener('DOMContentLoaded', () => {
    const botonesMagicos = document.querySelectorAll('.boton-magico');

    botonesMagicos.forEach((boton) => {
        const infoObras = boton.closest('.info_obras');
        const alerta = infoObras.querySelector('.boton-alerta');
        const cerrar = alerta.querySelector('.cerrar-alerta');

        const mostrarAlerta = (event) => {
            if (event.type === 'contextmenu') {
                event.preventDefault();
            }
            alerta.classList.add('mostrar-alerta');        // muestra el modal
            document.body.classList.add('body-bloqueado'); // bloquea el scroll del fondo
        };

        const ocultarAlerta = () => {
            alerta.classList.remove('mostrar-alerta');        // oculta el modal
            document.body.classList.remove('body-bloqueado'); // HABILITA scroll de nuevo
        };

        boton.addEventListener('click', mostrarAlerta);
        boton.addEventListener('contextmenu', mostrarAlerta);

        cerrar.addEventListener('click', ocultarAlerta);

        window.addEventListener('click', (event) => {
            if (event.target === alerta) {
                ocultarAlerta();
            }
        });

        const imagenEnAlerta = alerta.querySelector('.contenido-alerta img');
        if (imagenEnAlerta) {
            imagenEnAlerta.addEventListener('dblclick', () => {
                imagenEnAlerta.classList.toggle('efecto-js');
            });
        }
    });

    const logoSpan = document.querySelector('.logo span');
    if (logoSpan) {
        logoSpan.addEventListener('mouseenter', (event) => {
            event.target.style.color = '#131313';
        });
        logoSpan.addEventListener('mouseleave', (event) => {
            event.target.style.color = 'rgb(0, 0, 0)';
        });
    }
});
