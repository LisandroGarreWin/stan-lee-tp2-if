// función autoejecutable corre apenas carga la página
(() => {
  'use strict'; // modo estricto evita errores silenciosos

  // selecciona todos los formularios con la clase de Bootstrap
  const forms = document.querySelectorAll('.needs-validation');

  // recorre cada formulario
  Array.from(forms).forEach(form => {
    // al enviar el formulario
    form.addEventListener('submit', event => {
      // si no cumple las reglas html5 required pattern
      if (!form.checkValidity()) {
        event.preventDefault(); // bloquea el envío
        event.stopPropagation(); // detiene propagación del evento
      }
      // activa estilos de Bootstrap para mostrar errores validaciones
      form.classList.add('was-validated');
    }, false);
  });
})();
