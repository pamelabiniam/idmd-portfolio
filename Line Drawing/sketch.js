function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}
function draw() {
  if(mouseIsPressed) {
    stroke(255, 255, 255);
    line(150, 150, mouseX, mouseY);
    ellipse(mouseX, mouseY, 15, 15);
    fill(255, 0, 0)
  }
}
