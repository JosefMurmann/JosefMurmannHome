let tit;
let dig;
let tex;
let lab;
let up;
let sel;

function preload() {
  tit = loadFont("assets/ka1.ttf");
  dig = loadImage("assets/qr.png");
  dig2 = loadImage("assets/flow.png");
  dig3 = loadImage("assets/clock.png");
  lab = loadFont("assets/lable.ttf");
}

function setup() {

  up = createVector(0, -1, -1);
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("p5Canvas");
  frameRate(50);

}

function draw() {
  background(30);
  fl();
  titl();
  sph();
  cyl();
  bx();

  if (mouseY / height < 0.42 && mouseY / height > 0.18) {
    sel = 1;
  } else if (mouseY / height > 0.42 && mouseY / height < 0.59) {
    sel = 2;
  } else if (mouseY / height > 0.59 && mouseY / height < 0.83) {
    sel = 3;
  } else {
    sel = 0;
  }

}

function fl() {
  push();
  translate(0, height / 18, 0);
  rotateY(-frameCount / 200);
  stroke(255)
  for (let i = 0; i <= 20; i++) {
    line(i * 20 - 200, 300, -200, i * 20 - 200, 300, 200);
    for (let j = 0; j <= 20; j++) {
      line(-200, 300, i * 20 - 200, 200, 300, i * 20 - 200);
    }
  }
  if (sel == 1) {
    texture(dig);
    translate(0, 300, 0);
    box(400, 5, 400);
  }
  if (sel == 2) {
    texture(dig2);
    translate(0, 300, 0);
    box(400, 5, 400);
  }
  if (sel == 3) {
    texture(dig3);
    translate(0, 300, 0);
    box(400, 5, 400);
  }
  pop();
}

function sph() {
  push();
  directionalLight(255, 100, 100, up);
  noStroke();
  rotateY(frameCount / 200);
  translate(120, -height / 6, 120);
  textFont(lab);
  textSize(10);
  rotateY(-frameCount / 200);
  if (sel == 1) {
    fill(255, 0, 0);
  }
  text("QR Font", 0, 80, 10);
  rotateX(frameCount / 100);
  rotateY(PI + frameCount / 50);

  torus(40,20);
  pop();
}

function cyl() {
  push();
  directionalLight(255, 100, 100, up);
  noStroke()
  rotateY(TWO_PI / 1.5 + frameCount / 200);
  translate(120, 0, 120);
  textFont(lab);
  textSize(10);
  rotateY(-TWO_PI / 1.5 + -frameCount / 200);
  if (sel == 2) {
    fill(255, 0, 0);
  }
  text("Flow Feild", 0, 80, 10);
  rotateX(frameCount / 80);
  rotateZ(PI + frameCount / 100);

  torus(40,20);
  pop();
}

function bx() {
  push();
  directionalLight(255, 100, 100, up);
  noStroke();
  rotateY(TWO_PI / 3 + frameCount / 200);
  translate(120, +height / 6, 120);
  textFont(lab);
  textSize(10);
  rotateY(-TWO_PI / 3 - frameCount / 200);

  if (sel == 3) {
    fill(255, 0, 0);
  }
  text("Clock", 0, 80, 10);

  rotateX(frameCount / 80);
  rotateZ(PI + frameCount / 100);
  torus(40,20);
  pop();
}

function titl() {
  textAlign(CENTER);
  textFont(tit);
  textSize(20);
  text("Other Projects", 0, -height / 2 + 60, 0);
}

function mousePressed(){
  console.log(sel);
  if (sel == 1){ 
    window.open("other/QR.html","_self");
  }
  if (sel == 2){ 
    window.open("other/flow.html","_self");
  }
  if (sel == 3){ 
    window.open("other/clock.html","_self");
  }
}