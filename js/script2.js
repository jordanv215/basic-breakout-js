var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//first parameter is function to be executed
//second parameter indicates number of milliseconds before execution
setInterval(draw, 10);

// this will center the ball horizontally since half of the width of the canvas is right in the middle
var x = canvas.width/2;
// vertically, we will push the ball up 30px from the bottom of the page
var y = canvas.height - 30;

// so now the draw interval will be called every 10 seconds
function draw() {
  // drawing code
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
// ball will be redrawn on EVERY frame
}
