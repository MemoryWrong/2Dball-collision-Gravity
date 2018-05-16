var ball = new Ball(100,100);
var perlin = new Perlin();
var startPoint = {
	x:0,
	y: 200
}

function setup() {
	
  // put setup code here
  createCanvas(400,400);
  background(200);
}

function draw() {
	background(200);
	// put drawing code here
	
	
	// ball.draw();


	/** the perlin noise 2D graph view */
	perlin.draw(startPoint);


	// noLoop();
}
