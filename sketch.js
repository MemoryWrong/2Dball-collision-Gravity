console.log(13);
var ball = new Ball(100,100);

function setup() {
	
  // put setup code here
  createCanvas(400,400);
  background(200);
}

function draw() {
	background(200);
	// put drawing code here
	
	
	ball.draw();
	if(ball.y>200){
		ball.y += 1;
	}else{
		ball.y -=1;
	}
	// console.log(ball);
}
