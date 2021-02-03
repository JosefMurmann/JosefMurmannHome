let grid = []
let ar = 1
let br = 0.15
let af = 0.064
let bk = 0.056

function setup() {
  rectMode(CENTER);
  colorMode(HSB);
  canvas = createCanvas(500, 500);
  canvas.parent("p5Canvas")
  noStroke()
  for (let x = 0; x <= 100; x += 1) {
    grid[x] = [];
    for (let y = 0; y <= 100; y += 1) {
      grid[x][y] = (new cell(x,y,0,0))
    }
  }
      for (let x = 1; x < 99; x += 1) {
    for (let y = 1; y < 99; y += 1) {
      grid[x][y].b = 0
      grid[x][y].a = 1
      
      
    }
  }
    for (let x = 45; x <= 55; x += 1) {
    for (let y = 45; y <= 55; y += 1) {
      grid[x][y].b = 1
      grid[x][y].a = 0 
    }
  }
  
}
  

function draw() {
  //console.log(frameRate())
  background(220);
  for(let i = 0; i < 4; i++){
     for (let x = 1; x < 99; x += 1) {
    for (let y = 1; y < 99; y += 1) {
     
      grid[x][y].dif() 
    }
  }
  }
  
   for (let x = 1; x < 99; x += 1) {
    for (let y = 1; y < 99; y += 1) {
     
      grid[x][y].draw() 
    }
  }
  }


  class cell{
    constructor(x,y,a,b){
      this.x = x
      this.y = y
      this.a = a
      this.b = b
    }
    draw(){
     // if(this.a>this.b){fill(150)}else{fill(0)}
     fill(map(this.a,0,1,0,1000),map(this.b,0,1,0,255),100)
      rect(this.x*5+2.5,this.y*5+2.55,5)
    }
    dif(){
      this.a = constrain(this.a + (ar*((grid[this.x-1][this.y].a+grid[this.x+1][this.y].a+grid[this.x][this.y+1].a+grid[this.x][this.y-1].a)/5+((grid[this.x-1][this.y-1].a+grid[this.x+1][this.y+1].a+grid[this.x-1][this.y+1].a+grid[this.x+1][this.y-1].a)/20) - grid[this.x][this.y].a) - (this.a * this.b*this.b) + af*(1-this.a)),0,1)
      
      
      this.b = constrain(this.b + (br*((grid[this.x-1][this.y].b+grid[this.x+1][this.y].b+grid[this.x][this.y+1].b+grid[this.x][this.y-1].b)/5+((grid[this.x-1][this.y-1].b+grid[this.x+1][this.y+1].b+grid[this.x-1][this.y+1].b+grid[this.x+1][this.y-1].b)/20) -grid[this.x][this.y].b)+(this.a*this.b*this.b)-((af+bk)*this.b)),0,1)
  
    }
    }
