let sea;
let see;
let floor = [];
let shole  =  [];
p5.disableFriendlyErrors = true;
function setup() {
  frameRate(40);
  sea = color(20, 80, 140);
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("p5Canvas")
  c = createCamera();
  pos = createVector(1000, -20, 1000);
  setCamera(c);
   c.setPosition(pos.x, pos.y, pos.z);
  see = -5;
    for (let i = 0; i < 50; i++) {
      shole.push(new Fish());
    }
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 40; j++) {
      floor.push(new Block(i, j));
    }
  }
}

function draw() {
  background(sea);
   let campos = createVector(c.eyeX, c.eyeZ);
  for (let i = 0; i < floor.length; i++) {
    if (floor[i].pos.dist(campos) < 1000);
      floor[i].build(floor[i].pos.dist(campos));
  }
  
  for (let i = 0; i < shole.length; i++) {
    shole[i].attract();
    shole[i].draw();
    shole[i].move();
    shole[i].rep();
    shole[i].dir();
    shole[i].edges();
  }
  
  c.pan(see);
  
 
  
  
  if (keyIsDown(LEFT_ARROW)) {
    see = 0.03;

  } else if (keyIsDown(RIGHT_ARROW)) {
    see = -0.03;

  } else {
    see = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    c.move(0, 0, -5.7);

  }

  if (keyIsDown(DOWN_ARROW)) {
    c.move(0, 0, 1.2);

  }
}

class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.pos = createVector(250 + this.x * 50, 250 + this.y * 50);

  }
  build(dist) {
    push();
    noStroke();
    let h = noise((10 * this.x) / 50, (10 * this.y) / 50) * 400;
    translate(this.x * 50, h, this.y * 50);
    fill(map(dist, 0, 1000, 150, 20),map(dist, 0, 1000, 150, 80),map(dist, 0, 1000, 100, 140));
    box(50, 80, 50);
    pop();

  }
}

class Fish {
  constructor() {
    this.pos = createVector(random(0, 2000), random(0, 2000));
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.force = createVector(0, 0);
    this.pforce = createVector(0, 0);
    this.col = color(random(200, 255), random(0, 255), random(150, 255));
    this.h = random(50,-100);
  }
  move() {
    this.vel.setMag(3);
    this.force.setMag(0.1);
    this.pforce.setMag(0.1);
    this.vel.add(this.force);
    this.vel.add(this.pforce);
    this.pos.add(this.vel);
    
  }
  edges() {

    if (this.pos.x > 2000) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = 2000;
    }
    if (this.pos.y > 2000) {
      this.pos.y = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = 2000;
    }

  }
  draw() {
push();
    noStroke();
    fill(this.col);
    translate(this.pos.x,this.h,this.pos.y);
    rotateY(-this.vel.heading());
    box(10,5,5);
pop()
  }
  attract() {
    for (let i = 0; i < shole.length; i++) {
      if (shole[i].pos != this.pos) {
        if (shole[i].pos.dist(this.pos) < 500) {
          this.force.x -= this.pos.x - shole[i].pos.x;
          this.force.y -= this.pos.y - shole[i].pos.y;
        }
      }
    }
  }
  rep() {
    for (let i = 0; i < shole.length; i++) {
      if (shole[i].pos != this.pos) {
        if (shole[i].pos.dist(this.pos) < 100) {
          this.pforce.x += (this.pos.x - shole[i].pos.x) * 1.8;
          this.pforce.y += (this.pos.y - shole[i].pos.y) * 1.8;
        }
      }
    }
  }
  dir() {
    for (let i = 0; i < shole.length; i++) {
      if (shole[i].pos != this.pos) {
        if (shole[i].pos.dist(this.pos) < 50) {
          this.vel.rotate(this.vel.angleBetween(shole[i].vel) / 100);

        }
      }
    }

  }
}