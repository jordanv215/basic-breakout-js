var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// this will center the ball horizontally since half of the width of the canvas is right in the middle
var x = canvas.width/2;
// vertically, we will push the ball up 30px from the bottom of the page
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // clears the canvas before ball is drawn
  ctx.clearRect(0,0, canvas.width, canvas.height);
  // adds 2 on every frame every 10 milliseconds

  //cleaned up function by calling the drawBall function each time
  drawBall();

// is y position + the position of dy (2 in this case) is less than 0
  // if it's less than 0, we know the ball is moving up and off the canvas
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  if(x + dx > canvas.width-ballRadius|| x + dx < ballRadius) {
    dx = -dx;
  }

  x += dx;
  y += dy;
}

//first parameter is function to be executed
//second parameter indicates number of milliseconds before execution
setInterval(draw, 10);
