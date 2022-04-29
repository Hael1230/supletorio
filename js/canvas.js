function dibujarLinea() {
  var canvas = document.getElementById('cara');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle='rgba(0,255,0,1)';
    ctx.arc(500,100,50,0,Math.PI*2,true); // Círculo externo
    ctx.moveTo(535,105);
    ctx.arc(500,105,35,0,Math.PI,false);   // Boca (contra reloj)
    ctx.moveTo(495,95);
    ctx.arc(490,95,5,0,Math.PI*2,true);  // Ojo izquierdo
    ctx.moveTo(525,95);
    ctx.arc(520,95,5,0,Math.PI*2,true);  // Ojo derecho
    ctx.stroke();
  }
}