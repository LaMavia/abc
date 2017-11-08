const random = (max, min = 0, floor = true) => {
  if (floor) return Math.floor(Math.random() * (max - min) + min)
  else return Math.random() * (max - min)
}

const W = window.innerWidth,
  H = window.innerHeight
const maxSize = 200,
  minSize = 50

function Cloud(i, sizeX = random(maxSize, minSize * 2), sizeY = random(maxSize / 1.3, minSize)) {
  this.index = i
  this.sizeX = sizeX
  this.sizeY = sizeY
  this.x = W + this.sizeX
  this.y = random(H / 2, 10)
  this.speed = random(8,3,false)
  console.log(this.sizeX)
}
Cloud.prototype.del = function(i) {
  clouds = clouds.filter(cl => cl.x > 0 - cl.sizeX)
}
Cloud.prototype.update = function() {
  this.x -= this.speed / 2
}
Cloud.prototype.draw = function() {
  stroke(0)
  strokeWeight(5)
  fill(255)
  rect(this.x, this.y, this.sizeX, this.sizeY)
  console.log(this.x)
}
let clouds = []


function setup() {
  createCanvas(W, H)
}

function draw() {
  background(135, 206, 235)
  while (clouds.length < 7) {
    clouds.push(new Cloud())
  }
  clouds.forEach(c => {
    c.update()
    c.draw()
    if (c.x <= 0 - c.sizeX) {
      c.del(c.index)
    }
  })
  strokeWeight(2)
  fill(118,238,0)
  rect(0,H - 30,W,30)
}