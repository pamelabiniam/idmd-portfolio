function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  for (i = 0; i < mouseX; i += 5) {
    for (j = 0; j < mouseY; j += 5) {
      line(0, i, mouseX, i);
      line(j, 0, j, mouseY);
    }
  }

}