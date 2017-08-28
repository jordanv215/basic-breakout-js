var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//first parameter is function to be executed
//second parameter indicates number of milliseconds before execution
setInterval(draw, 10);


// so now the draw interval will be called every 10 seconds
function draw() {
  // drawing code
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
// ball will be redrawn on EVERY frame
}
