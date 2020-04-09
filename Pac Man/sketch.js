//PACMAN CODE EXTRACT TWO
var radius = 40;
var x = radius;
var speed = 3;
var direction = 1;
var y = radius;

function setup() {
  createCanvas(400, 600);
  ellipseMode(RADIUS);
}

function draw() {
  background('#F5BF42');
  fill('#42C5F5');
  if (!mouseIsPressed) {
    x += random(-speed, speed); // Increase the value of x
    y += random(-speed, speed);
    if (x > width + radius) { // If the shape is off screen
      x = -radius; // move to the left edge
    }
    arc(x, y + 200, radius, radius, 0.52, 5.76);
  } else {
    x += speed * direction; // Increase the value of x in the proper direction
    if ((x > width - radius) || (x < radius)) { //if shape is on edges of canvas
      direction = -direction; // Flip direction
    }
    if (direction == 1) {
      arc(x, 60, radius, radius, 0.52, 5.76); // Face right
    } else {
      arc(x, 60, radius, radius, 3.67, 8.9); // Face left
    }
  }
}
/*var radius = 50;
var x = radius/2;
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background('#A88932');
  x += 5;
  if (x > width + radius) {
    x = 0 - radius;
  }
  fill('#42C6F6')
  ellipse(x, height/2, radius, radius);
}

 var radius = 50;
var x = radius/2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#fcba03');
  x += 1;
  if (x > width + radius) {
    x = 0 - radius;
  }
  fill('#42c6f6')
  ellipse(x,height/2,radius,radius);
} */