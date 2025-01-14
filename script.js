// script.js

// Evento para el botón de "Descubre más"
document.getElementById('cta-btn').addEventListener('click', function() {
    alert('¡Gracias por interesarte en UNIBOX!');
});

// Validación del formulario de contacto (simple)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado con éxito.');
});
