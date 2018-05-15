// import Ball from "./ball";

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(200);
}

function draw() {
  // put drawing code here
  
  var ball = new Ball(100,100);
  ball.draw();
}
