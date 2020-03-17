function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  //background(220);
}

//print means print in console 
// == comparing left side to right side
// key
function keyTyped() {
  background(220);
  print(key);
  textSize(100);
  text(key, 100, 100);
  if (key.toLowerCase() == "r") {
    background(255, 0, 0);
    text(key, 100, 100);
  } else if (key == "g" || key == "G") {
    background(0, 255, 0);
    text(key, 100, 100);
  } else if (key.toLowerCase() == "b") {
    background(0, 0, 255);
    text(key, 100, 100);
  }
}