// targets canvas
var canvas = document.getElementById('myCanvas');

// returns drawing context on canvas - returns context identifier and context associated with the canvas - i'm using 2d because...well...it's breakout.
// basically allows drawing on canvas!
var ctx = canvas.getContext('2d');

ctx.beginPath(); //start
//content goes between start and finish

//rectangle - first two values specify the coordinates of the top left of the canvas
// 2nd 2 values specify width and height
ctx.rect(20, 40, 50, 50);

//this style fills a color - in this case, red
ctx.fillStyle = "#FF0000";

// this actually paints the rectangle red.
ctx.fill();
ctx.closePath(); //finish

ctx.beginPath();

ctx.closePath();
