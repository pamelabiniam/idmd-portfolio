var x = 250;
var y = 250;
var w = 50;
var circlered = 100;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  fill(circlered, 0, 0);
  ellipse(x, y, w, w);
  distance = dist(x, y, mouseX, mouseY);
  if (distance < w / 2) {
    w += 1;
    // ++ means add 1, -- means subtract 1
    circlered++
  } else {
    w = 50;
  }
}