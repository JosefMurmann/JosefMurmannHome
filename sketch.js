let tit;
let dig;
let tex;
let lab;
let up;
let sel;
function preload() {

  tit = loadFont("ka1.ttf");
  dig = loadImage("https://i.imgur.com/EK1xLp5.png");
  lab = loadFont("lable.ttf");
}

function setup() {
  up = createVector(0,-1,-1);
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

  if(mouseY/height < 0.42 && mouseY/height > 0.18){ 
    sel = 1;
  }else if (mouseY/height > 0.42 && mouseY/height < 0.59){
     sel = 2;
    }else if (mouseY/height > 0.59 && mouseY/height < 0.83){
       sel = 3;
      }else{sel = 0;
      }
  
}

function fl() {
  push();
  translate(0,height/18,0);
  rotateY(frameCount / 200);
  stroke(255);
  for (let i = 0; i <= 20; i++) {
    line(i * 20 - 200, 250, -200, i * 20 - 200, 250, 200);
    for (let j = 0; j <= 20; j++) {
      line(-200, 250, i * 20 - 200, 200, 250, i * 20 - 200);
    }
  }
  pop();
}
function sph(){
    push();
  noStroke();
  rotateY(frameCount / 200);
  translate(120, -height/6, 120);
  textFont(lab);
  textSize(10);
  rotateY(-frameCount / 200);
  if(sel == 1){fill(255,0,0)}
  text("Digital Morphogenisis",0,80,10);
  rotateX(frameCount / 100);
  rotateY(PI + frameCount / 50);
  texture(dig);
  sphere(60);
  pop();
}
function cyl(){
    push();
  noStroke();
  rotateY(TWO_PI/1.5+ frameCount / 200);
  translate(120, 0, 120);
  textFont(lab);
  textSize(10);
  rotateY(-TWO_PI/1.5+ -frameCount / 200);
  if(sel == 2){fill(255,0,0)}
  text("Outside",0,80,10);
  rotateX(frameCount / 80);
  rotateZ(PI + frameCount / 100);
  normalMaterial();
  cylinder(40,80);
  pop();
}
function bx(){
    push();
  directionalLight(255,255,255,up);
  ambientLight(20,20,50);
  noStroke();
  rotateY(TWO_PI/3 + frameCount / 200);
  translate(120, +height/6, 120);
  textFont(lab);
  textSize(10);
  rotateY(-TWO_PI/3 - frameCount / 200);
  push();
  if(sel == 3){fill(255,0,0)}
  text("other",0,80,10);
  pop();
  rotateX(frameCount / 80);
  rotateZ(PI + frameCount / 100);
  box(60);
  pop();
}
function titl() {
  textAlign(CENTER);
  textFont(tit);
  textSize(20);
  text("Jaywalking In CyberSpace", 0, -height/2+60, 0);
}
function mousePressed(){
  console.log(sel);
  if (sel == 1){ 
    window.open("digmorph.html","_self");
  }
}