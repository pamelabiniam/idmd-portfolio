// Define the Constructor for Pamrobot
class Pamrobot {
  constructor(posx, posy, dia, color) {
    this.posx = posx; // Four properties are defined here
    this.posy = posy;
    this.dia = dia;
    this.speed = 2.5;
    this.color = color;
  }
  
  jitter() {
    this.posx += random(-this.speed, this.speed);
    this.posy += random(-this.speed, this.speed);
  }

  kill() {
    this.color = "red";
    this.speed = 0;
  }

  pamrobot() {
    //ellipse(this.posx, this.posy, this.dia / 2);
    fill(218, 79, 79);
    push();
    translate(this.posx, this.posy);
    ellipse(0, 0, this.dia, this.dia);
    fill(117, 77, 77);
    ellipse(-15, -10, 20, 20);
    fill(117, 77, 77);
    ellipse(15, -10, 20, 20);
    //fill(19, 16, 201);
    fill(this.color);
    rect(-37, 40, 75, 140, 55, 55, 0, 0);
    line(-100, 90, -35, 120);
    line(35, 120, 100, 90);
    line(-20, 180, -20, 235);
    line(20, 180, 20, 235);
    line(-25, -27, -5, -23);
    line(5, -23, 25, -27);
    pop();
  }
  
  move(x, y) {
    this.posx = x;
    this.posy = y;
  }
  
  display() {
    fill(this.color);
    this.pamrobot();
    // to your robot constructor
  }
}
