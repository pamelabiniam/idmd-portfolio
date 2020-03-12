function setup() {
  createCanvas(400, 400);
  background(200);
  var dia = width / 10
  var rad = dia / 2

  // i is a loop variable 
  for (i = rad; i <= width; i = i + dia) {
    for (j = rad; j <= height; j = j + dia) {
      print(i);
      ellipse(i, j, dia, dia);
    }
  }
}

function draw() {
  // Nothing goes here
}