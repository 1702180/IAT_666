// Archivo miiat.js

const IAT = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: '<p>Bienvenido a tu experimento IAT básico.</p><p>Presiona cualquier tecla para continuar.</p>'
    },
    {
      type: 'html-keyboard-response',
      stimulus: '<p>Fin del experimento.</p><p>Gracias por participar.</p>'
    }
  ]
};

minnoJS = function(container, url) {
  // Ejemplo simple: solo muestra mensajes sin lógica compleja
  container.innerHTML = '<p>Este es un experimento básico de MinnoJS.</p>';
  setTimeout(() => {
    minnoJS.onEnd();
  }, 3000);
}

minnoJS.onEnd = function() {};
minnoJS.logger = function(value) {
  console.log('Datos registrados:', value);
};

