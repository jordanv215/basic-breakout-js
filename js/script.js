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


// time for a circle! break dem bricks yo
ctx.beginPath();

// this takes 6 parameters - x and y, which are the first 2
  // the arc radius - 20 - positions is on stage (how big the circle is going to be)
  // the 0 is the START angle. the math.PI*2 is the END angle
    // math.PI*2 is equivilent to 360 degrees, and 0 is 0 degrees. The values can only be in radiuns though (hope I'm spelling that correctly)
  // the false is there for the direction of the drawing. False means clockwise - which is default, but I'm putting it here just so I know in the future.
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";

ctx.fill();
ctx.closePath();
