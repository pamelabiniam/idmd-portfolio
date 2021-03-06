var x = 50;
var y = 50;
var dia = 50

function setup() {
  createCanvas(400, 400);
  //print(width);
  //print(height);
}

//keyIsPressed reacts to the up/down/side/side arrows 
function draw() {
  background(220);
  fill(255, 0, 0);
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x += 3;
      // increments of three
      if (x >= width - dia / 2) x = width - dia / 2;
    } else if (keyCode == LEFT_ARROW) {
      x -= 3;
      if (x <= dia / 2) x = dia / 2;
    } else if (keyCode == DOWN_ARROW) {
      y += 3;
      if (y >= height - dia / 2) y = height - dia / 2;
    } else if (keyCode == UP_ARROW) {
      y -= 3;
      if (y <= dia / 2) y = dia / 2;
    }
  }
  ellipse(x, y, dia, dia);
}