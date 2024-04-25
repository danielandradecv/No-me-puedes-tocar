// creo una variable llamando al id de mi html el cual quiero aplicar el codigo
var miObjeto = document.getElementById('miObjeto');
//aqui se detecta señales del dom para cambiar la posicion del objeto 
document.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  var boxX = miObjeto.offsetLeft + 50;  // Sumamos 50 para obtener el centro del objeto
  var boxY = miObjeto.offsetTop + 50;

  if (Math.abs(x - boxX) < 50 && Math.abs(y - boxY) < 50) {
    miObjeto.style.left = Math.random() * (window.innerWidth - 8) + 'px';  // Restamos 100 para tener en cuenta el tamaño del objeto
    miObjeto.style.top = Math.random() * (window.innerHeight - 8) + 'px';
  }
});
