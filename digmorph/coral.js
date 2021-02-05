let circ = []

function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent("p5Canvas")
  fill(255, 0, 85);
  circ.push(new Circle(1, 250, 250));
  for (let i = 0; i < 800; i++) {
    circ.push(new Circle(0, random(0, width), random(0, height)));

  }
}


function draw() {
  background(173, 216, 230);

  for (let i = 0; i < circ.length; i++) {
    circ[i].move();
    circ[i].draw();
    circ[i].check();
  }


}

class Circle {
  constructor(a, x, y) {
    this.x = x;
    this.y = y;
    this.touch = 0;
    this.assimalated = a;
    this.pos = createVector(this.x, this.y)
  }
  move() {
    if (this.touch != 1) {
      this.pos.x += random(-5, 5);
      this.pos.y += random(-5, 5);
    }
  }

  draw() {
    if (this.assimalated == 1) {
      fill(255, 0, 85);
      ellipse(this.pos.x, this.pos.y, 4);
    } else {
      fill(0,0);
      ellipse(this.pos.x, this.pos.y, 4);
    }

  }
  check() {
    for (let i = 0; i < circ.length; i++) {
      if (this.x != circ[i].x) {
        if (this.pos.dist(circ[i].pos) < 5) {
          if (circ[i].assimalated == 1) {
            this.touch = 1;
            this.assimalated = 1;
          }
        }
      }
    }
  }
}