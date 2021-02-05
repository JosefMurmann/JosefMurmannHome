let x = ""
let cols = []
let back
let count = 0
function preload() {
  epic = loadFont('code-sans.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0)
  
  textSize(40)
  back = color(255,255,255)
  cols = [color(199,144,77),color(142,155,163),color(171,165,133),color(219,181,100),color(171,138,119),color(162,96,84),color(209,161,115),color(238,230,209),color(198,185,176),color(205,182,148),color(218,193,163),color(233,211,174),color(179,146,155),color(217,202,173),color(215,189,162)]
  

}

function draw() {
  background(back);
  x = document.getElementById("myTextarea").value;
  text("Re-Cipher",width/10,50)
  push()
  textSize(20);
  textLeading(20)
  textFont(epic)
  text(x,width/2+width/10+10, 110, 600,height/1.2)
  pop()
  push()
  line(width/2, 100, width/2, 9 * height/9.5)
  noFill()
  rect(width/2+width/10, 100, 620,height/1.2)
  pop()
  
  push()
  textSize(15)
  text("Typography by Guy Burgess, website by Josef Murmann ",width-400,height - 17)
  pop()
  if(count > 50){
    back = random(cols);
    count = 0;
    console.log("ping")
  }
}
function keyPressed(){
  count++
  console.log(count)
}

