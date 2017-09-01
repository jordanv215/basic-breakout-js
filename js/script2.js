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
var paddleWidth = 85;
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

// creating bricks array - empty for now
var bricks = [];

//for loop starts at 0 - at index 0, it creates another array inside of it that loops until 2 (3 times)
for (c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for (r=0; r<brickRowCount; r++) {
    bricks[c][r] = {x:0, y:0, status: 1};
  }
}



//event listeners that will tell when a key is pressed down/when it is released
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);


function drawBricks() {
  for(c=0; c<brickColumnCount; c++) {
    for(r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (c* (brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (r* (brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath;
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#569f56";
        ctx.fill();
        ctx.closePath;
      }
    }
  }
}

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

function collisionDetection() {
  for(c=0; c<brickColumnCount; c++){
    for(r=0; r<brickRowCount; r++){
      // this will store the brick object in every loop
      var b = bricks[c][r];
      if(b.status == 1) {
        // if x position of ball is greater than x position of the brick and less than x of brick + brick width (if it's within the left and right sides of the brick), change the direction of the ball. Same for the y.
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          // change status to 0 so it's not drawn again
          b.status = 0;
        }
      }
    }
  }
}

function draw() {
  // clears the canvas before ball is drawn
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();

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
