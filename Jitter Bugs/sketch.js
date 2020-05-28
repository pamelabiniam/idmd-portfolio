let bug = [];
let bug2 = [];
let bug3 = [];

let maxBugs = 10;

function setup() {
  createCanvas(480, 120);
  background(204);
  // Create object and pass in parameters
  for (i = 0; i < maxBugs; i++) {
    bug = new JitterBug(width / 2, height / 2, 20);
    bug2 = new JitterBug(width / 2, height / 2, 20);
    bug3 = new JitterBug(width / 2, height / 2, 20);

  }
}

function draw() {
  background(150);
  // Displays and makes the bugs move  
  bug.move();
  bug2.move();
  bug3.move();
  bug.display();
  bug2.display();
  bug3.display();
}

function JitterBug(xpos, ypos, dia) {
 //position and speed of bugs and how they move
  this.xpos = xpos;
  this.ypos = ypos;
  this.dia = dia;
  this.speed = 2.5;

  this.display = function() {
    ellipse(this.xpos, this.ypos, this.dia, this.dia);
  }

  this.move = function() {
    this.xpos = this.xpos + random(-this.speed, +this.speed);
    this.ypos = this.ypos + random(-this.speed, +this.speed);
  }

  this.kill = function() {
    this.speed = 0;
  }
}

function mousePressed() {
  //when mousePressed, bugs are killed
  let dBug2 = dist(mouseX, mouseY, bug2.xpos, bug2.ypos);
  if (dBug2 < bug2.dia) {
    bug2.kill();
  }
  let dBug = dist(mouseX, mouseY, bug.xpos, bug.ypos);
  if (dBug < bug.dia) {
    bug.kill();
  }
  let dBug3 = dist(mouseX, mouseY, bug3.xpos, bug3.ypos);
  if (dBug3 < bug3.dia) {
    bug3.kill();
  }

}