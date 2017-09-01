var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// this will center the ball horizontally since half of the width of the canvas is right in the middle
var x = canvas.width/2;
// vertically, we will push the ball up 30px from the bottom of the page
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
// starting width and height
var paddleHeight = 10;
var paddleWidth = 75;
// starting x position on canvas
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft= 30;

//event listeners that will tell when a key is pressed down/when it is released
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

// when you press the key down, it stores a keycode for the key that is pressed
  // is then passed as an argument into this function
  // keycode 39 corresponds to the right arrow
function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
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
  drawPaddle();

// is y position + the position of dy (2 in this case) is less than 0
  // if it's less than 0, we know the ball is moving up and off the canvas
  if(y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("GAME OVER");
      // returns location object that contains information about the url of the document
      document.location.reload();
    }
  }
  if(x + dx > canvas.width-ballRadius|| x + dx < ballRadius) {
    dx = -dx;
  }

  // checking if left and right is pressed
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }


  x += dx;
  y += dy;
}

//first parameter is function to be executed
//second parameter indicates number of milliseconds before execution
setInterval(draw, 10);
