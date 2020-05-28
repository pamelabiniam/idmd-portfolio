function recursiveSquare(x, y, s) {
  stroke(0);
  noFill();
  square(x, y, s);
  if (s >= 2) {
    recursiveSquare(x + s / 2, y, s / 2);
    recursiveSquare(x - s / 2, y, s / 2);
    recursiveSquare(x, y + s / 2, s / 2); //Sierpinski triangle
    recursiveSquare(x, y+s/2, s/2);
  }
}

function setup() {
  createCanvas(600, 600);
  recursiveSquare(width/2, height / 2, 300);
}

function draw() {
  //background(230);
}