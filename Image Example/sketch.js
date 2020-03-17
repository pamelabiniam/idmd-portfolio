var pup;

function preload() {
  pup = loadImage("puppy.jpg");
}

function setup() {
  createCanvas(400, 400);
}
var a = 789 / 526;

function draw() {
  background(220);
  image(pup, 0, 0, 400, 400 / a);
}