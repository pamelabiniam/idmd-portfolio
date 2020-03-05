function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
}

//print means print in console 
// == comparing left side to right side
// key
function keyTyped() {
  print(key);
  if (key.toLowerCase() == "r") {
    background(255, 0, 0);
  } else if (key == "g" || key == "G") {
    background(0, 255, 0);
  } else if (key.toLowerCase() == "b") {
    background(0, 0, 255)
  } else {
    background(200);
  }
}