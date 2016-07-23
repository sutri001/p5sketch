var x = 0
var y = 0
var i = 120
var j = 0

function setup() {
  fullscreen()
  createCanvas(200, 200)
  background(200,71,138)
  frameRate(1)
}

function draw() {
  fill(100,90,146,90)
  stroke(255)
  rect(x,y,80,80)
  x=x+8
  y=y+10
 
  fill(70,190,6,85)
  stroke(255)
  rect(i,j,80,80)
  i=i-8
  j=j+10
}