let prs = []; // A pointer to the array of Robots 
let maxPrs = 8; // Amount of robots  allowed
let dia = 80; // size of head(ellipse)

function setup() {
  createCanvas(800, 800);
  // color 0: blue 1:pink 2:yellow 3:white
  ca = [color(19, 16, 201), color(221, 115, 92), color(255, 247, 0), color(255)];
  for (i = 0; i < maxPrs; i++) {
    // Create object and pass in parameters
    prs[i] = new Pamrobot(100, 50, dia, color(255)); // Call to Construct the Pamrobot object


  } 
  //Assigns each robot a color
  prs[1].color = ca[0];
  prs[2].color = ca[1];
  prs[3].color = ca[2];
  prs[4].color = ca[1];
  prs[5].color = ca[0];
  prs[6].color = ca[3];
  prs[7].color = ca[2];

  createP("click the mouse")

}



function draw() {
  background(204);
  for (i = 0; i < maxPrs; i++) {
    prs[i].jitter();
    prs[i].display();

  }
}

function mousePressed() {
  //when mousePressed, disperses robots by color to all four corners
  for (i = 0; i < maxPrs; i++) {
    if (prs[i].color == ca[0]) {
      prs[i].move(width - 100, height - 300)
    }
    if (prs[i].color == ca[1]) {
      prs[i].move(width - 100, 50)
    }
    if (prs[i].color == ca[2]) {
      prs[i].move(100, height - 300)
    }
    if (prs[i].color == ca[3]) {
      prs[i].move(100, 50)
    }
  }
}