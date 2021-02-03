let nodes = []
let insrt

function setup() {

  noFill()
  angleMode(DEGREES)
  let canvas = createCanvas(windowWidth*0.8, windowHeight/2);
  canvas.parent("p5Canvas")
  for (let i = 0; i < 50; i++) {
    nodes.push(new node(width/2 - 375 + i * 15, 300 + random(-5, 5), i))
  }

}

function draw() {
  strokeWeight(3)
  stroke(255)
  background(83);
  insrt = round(random(1, nodes.length - 2))
  beginShape()
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].draw()
  }
  endShape()
  for (let i = 1; i < nodes.length - 1; i++) {
    nodes[i].atr()
    nodes[i].str()
    nodes[i].rep()
    nodes[i].edges()
    nodes[i].move()

  }
  if(nodes.length <= 1200){
  for (i = insrt; i < nodes.length; i++) {
    nodes[i].numb++
  }

  nodes.splice(insrt, 0, new node((nodes[insrt - 1].pos.x + nodes[insrt].pos.x) / 2, (nodes[insrt - 1].pos.y + nodes[insrt].pos.y) / 2, insrt))
}


}
class node {
  constructor(x, y, num) {
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.mid = createVector(0, 0);
    this.numb = num
    this.push = createVector(0, 0);
    this.edge = createVector(0, 0);
  }

  draw() {
    vertex(this.pos.x, this.pos.y)
  }

  atr() {

    this.dir.x += nodes[this.numb - 1].pos.x - this.pos.x
    this.dir.y += nodes[this.numb - 1].pos.y - this.pos.y

    this.dir.x += nodes[this.numb + 1].pos.x - this.pos.x
    this.dir.y += nodes[this.numb + 1].pos.y - this.pos.y

    this.dir.mult(0.35)


  }
  str() {

    let middle = createVector((nodes[this.numb - 1].pos.x + nodes[this.numb + 1].pos.x) / 2, (nodes[this.numb - 1].pos.y + nodes[this.numb + 1].pos.y) / 2)

    this.mid.x -= this.pos.x - middle.x
    this.mid.y -= this.pos.y - middle.y
    this.mid.mult(0.1)


  }
  rep() {
    for (let i = 1; i < nodes.length - 1; i++) {
      if (this.pos.dist(nodes[i].pos) < 16) {
        this.push.x -= nodes[i].pos.x - this.pos.x
        this.push.y -= nodes[i].pos.y - this.pos.y
      }
    }
    this.push.setMag(0.5)


  }
  edges() {

    if (this.pos.x < 20) {
      this.edge.x += 1
    }
    if (this.pos.x > width - 20) {
      this.edge.x -= 1
    }
    if (this.pos.y < 20) {
      this.edge.y += 1
    }
    if (this.pos.y > height - 20) {
      this.edge.y-= 1
    }
this.edge.mult(0.2)

  }


  move() {
    this.pos.add(this.dir)
    this.pos.add(this.push)
    this.pos.add(this.edge)
    this.pos.add(this.mid)
  }
}

function mouseClicked() {
  console.log("you are now at " + nodes.length + " nodes!")


}