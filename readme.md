# Evita tocar el balón: un ejercicio de manipulación del DOM con JavaScript

Este proyecto consiste en un ejercicio de manipulación del DOM utilizando JavaScript, donde se presenta un balón de fútbol que no puede ser tocado por el puntero del mouse.

## Código JavaScript utilizado

```javascript
// Creo una variable llamando al id de mi HTML al cual quiero aplicar el código
var miObjeto = document.getElementById('miObjeto');

// Detecta señales del DOM para cambiar la posición del objeto 
document.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  var boxX = miObjeto.offsetLeft + 50;  // Sumamos 50 para obtener el centro del objeto
  var boxY = miObjeto.offsetTop + 50;

  if (Math.abs(x - boxX) < 50 && Math.abs(y - boxY) < 50) {
    miObjeto.style.left = Math.random() * (window.innerWidth - 8) + 'px';  // Restamos 8 para tener en cuenta el tamaño del objeto
    miObjeto.style.top = Math.random() * (window.innerHeight - 8) + 'px';
  }
});


```

![Captura del proyecto](https://github.com/danielandradecv/No-me-puedes-tocar-/blob/main/img/Sin-t%C3%ADtulo-11.jpg)
