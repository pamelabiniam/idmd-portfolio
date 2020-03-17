function setup() {
  createCanvas(400, 400);
  background(94, 160, 174);
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
  } else
    fill(255, 253, 255);
  ellipse(mouseX, mouseY, 90, 90);
}
//function draw gets called 60 times per second
//The fill for when mouseIsPressed is all random
//fill for when it is not pressed is this nice blue. 
//ellipse paramaters are (x,y,width,height) 