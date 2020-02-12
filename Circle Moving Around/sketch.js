function setup() {
  createCanvas(800, 400);
  background(94, 160, 174)
}

function draw() {
  if(mouseIsPressed) {
    fill(200, 200, 4);
  }else {
    fill(255, 253, 255);
  }
  ellipse(mouseX, mouseY, 90, 90)
    
}