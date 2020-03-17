var x = 200,
  y = 200,
  xOffset, yOffset, moving = true;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  updateOffset();
  drawRobot();
}

function drawRobot() {
  background(220);
  fill(218, 79, 79);
  ellipse(200 + xOffset, 100 + yOffset, 80, 80);
  fill(117, 77, 77);
  ellipse(185 + xOffset, 90 + yOffset, 20, 20);
  fill(117, 77, 77);
  ellipse(215 + xOffset, 90 + yOffset, 20, 20);
  fill(19, 16, 201);
  rect(163 + xOffset, 140 + yOffset, 75, 140, 55, 55, 0, 0);
  line(100 + xOffset, 190 + yOffset, 165 + xOffset, 220 + yOffset);
  line(235 + xOffset, 220 + yOffset, 300 + xOffset, 190 + yOffset);
  line(180 + xOffset, 280 + yOffset, 180 + xOffset, 335 + yOffset);
  line(220 + xOffset, 280 + yOffset, 220 + xOffset, 335 + yOffset);
  line(175 + xOffset, 73 + yOffset, 195 + xOffset, 77 + yOffset);
  line(205 + xOffset, 77 + yOffset, 225 + xOffset, 73 + yOffset);
}

function updateOffset() {
  if (moving) {
    xOffset = mouseX - x;
    yOffset = mouseY - y;
  }
}

function mousePressed() {
  moving = !moving;
}

//In this code, I made a robot using ellipses, rectangles, and lines. I made it so that every single shape moves when the mouse moves.