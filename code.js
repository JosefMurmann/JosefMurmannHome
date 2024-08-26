let tit;
let dig;
let tex;
let lab;
let up;
let sel;
let img;
let one;let two;let three;let four; let five; let six; let seven; let eight; let nine;
function preload() {
 
  img = loadImage('assets/texture.jpg');
  tit = loadFont("assets/ka1.ttf");
  lab = loadFont("assets/lable.ttf");

  one =loadImage('assets/coral.png');
  two =loadImage('assets/react.png');
  three =loadImage('assets/pog.png');
  four = loadImage('assets/fire.png');
  five = loadImage('assets/deep.png');
  six = loadImage('assets/pool.png');
  seven =loadImage('assets/clock.png');
  eight = loadImage('assets/flow.png');
  nine = loadImage('assets/qr.png');
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
  clicker("Diffusion Limited Agrigation",1,1,1);
  clicker("Diferential Growth",2,1,2);
  clicker("Reaction Difusion",3,1,3);
  clicker("Fireflys",4,2,1);
  clicker("Fish",5,2,2);
  clicker("Rock Pools",6,2,3);
  clicker("Numberless Clock",7,3,1);
  clicker("Flow Feild",8,3,2);
  clicker("QR font",9,3,3);
  
if(mouseX > windowWidth/3 && mouseX < 2*windowWidth/3){
          if(mouseY/height > 0.05 && mouseY/height < 0.18){
     sel = 1;
    }else if (mouseY/height > 0.18 && mouseY/height < 0.27){
       sel = 2;
      }else if (mouseY/height > 0.27 && mouseY/height < 0.37){
        sel = 3;
       }else if (mouseY/height > 0.37 && mouseY/height < 0.46){
        sel = 4;
       }else if (mouseY/height > 0.46 && mouseY/height < 0.55){
        sel = 5;
       }else if (mouseY/height > 0.55 && mouseY/height < 0.64){
        sel = 6;
       }else if (mouseY/height > 0.64 && mouseY/height < 0.73){
        sel = 7;
       }else if (mouseY/height > 0.73 && mouseY/height < 0.82){
        sel = 8;
       }else if (mouseY/height > 0.82 && mouseY/height < 0.91){
          sel = 9;
       }else{sel = 0;
      }
    }else{sel=0;}}
  
function fl() {
  push();
  translate(0,height/18,0);
  rotateY(frameCount / 200);
  stroke(255);
  for (let i = 0; i <= 20; i++) {
    line(i * 20 - 200, 300, -200, i * 20 - 200, 300, 200);
    for (let j = 0; j <= 20; j++) {
      line(-200, 300, i * 20 - 200, 200, 300, i * 20 - 200);
    }
  }
  pop();

  push();
  translate(-400,0,200);
  
  rotateY(PI/5)

  strokeWeight(0);


  if (sel == 1) {
    texture(one);
  }
  if (sel == 2) {
    texture(two);
  }
  if (sel == 3) {
    texture(three);
  }
  if (sel == 4) {
    texture(four);
  }
  if (sel == 5) {
    texture(five);
  }
  if (sel == 6) {
    texture(six);
  }
  if (sel == 7) {
    texture(seven);
  }
  if (sel == 8) {
    texture(eight);
  }
  if (sel == 9) {
    texture(nine);
  }
  if (sel==0){noFill()}
    box(400, 400, 5);
  pop();

}


function clicker(x,y,z,a){
  let lable = x;
  let pos = y * (windowHeight/10.7);
  let vis = z;
  let shape = a;
  
    push();
  noStroke();
  rotateY(y*((TWO_PI/3)+ frameCount) / 300);
  translate(100, -windowHeight/2+pos, 0);
  textFont(lab);
  textSize(7);
  rotateY(-(y*((TWO_PI/3)+ frameCount)) / 300);
  if(sel == y){fill(255,0,0)}
  text(lable,0,45,10);
  rotateX(frameCount / 100);
  rotateY(PI + frameCount / 50);
  if(vis==1){
    normalMaterial();
  }
  if(vis==2){
    directionalLight(255,255,255,up);
    ambientLight(20,20,50);
    noStroke();
    fill(220);
  }
  if(vis==3){
    texture(img)
  }

  if(shape==1){
    cylinder(20,40);
  }
  if(shape==2){
   sphere(30);
  }
  if(shape==3){
    torus(20,10);
  }
  if(shape==4){
    box(30);
  }
  
  pop();
}


function titl() {
  textAlign(CENTER);
  textFont(tit);
  textSize(20);
  text("coding projects", -width/3, -height/2+60, 200);
}


function mousePressed(){
  console.log(sel);
  if (sel == 1){ 
    window.open("digmorph/coral.html","_self");
  }
  if (sel == 2){ 
    window.open("digmorph/difgrow.html","_self");
  }
  if (sel == 3){ 
    window.open("digmorph/reacdif.html","_self");
  }
    if (sel == 4){ 
      window.open("outside/firefly.html","_self");
    }
    if (sel == 5){ 
      window.open("outside/depth.html","_self");
    }
    if (sel == 6){ 
      window.open("outside/rockpool.html","_self");
    }
      if (sel == 7){ 
        window.open("other/clock.html","_self");
      }
      if (sel == 8){ 
        window.open("other/flow.html","_self");
      }
      if (sel == 9){ 
        window.open("other/QR.html","_self");
      }
}