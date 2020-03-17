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
  //lines 13-15 are the gradient
  createbackground();
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x += 3;
      if (x >= width - dia / 2) x = width - dia / 2
    } else if (keyCode == LEFT_ARROW) {
      x -= +3;
      if (x <= dia / 2) x = dia / 2;
    } else if (keyCode == DOWN_ARROW) {
      y += 3;
      if (y >= height - dia / 2) y = height - dia / 2;
    } else if (keyCode == UP_ARROW) {
      y -= 3;
      if (y <= dia / 2) y = dia / 2;
    }

    print(x, y);
    ellipse(x, y, dia, dia);
  }

  function createbackground() {
    for (i = 0; i < 500; i++) {
      stroke(i * 0.5, i * 0.5, 150);
      line(0, i, 500, i);
    }
  }
}