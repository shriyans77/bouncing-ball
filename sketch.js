let x = 200 //horizontal position of the ball
let y = 200 //vertical position of the ball


let xspeed = 4 //horizontal speed of the ball
let yspeed = 3 //vertical speed of the ball

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(x,y,40)
  x += xspeed
  y += yspeed
  
if (x > width || x < 0){
  xspeed *=-1
}
  
  if (y > height || y < 0){
     yspeed *=-1
     }  
}


