var ball = new Ball(100,100,{x:1.5,y:0});
var ball2 = new Ball(100,100,{x:3,y:5});
var perlin = new Perlin();
var startPoint = {
	x:0,
	y: 200
}

function setup() {
	
  // put setup code here
  createCanvas(windowWidth,400);
  background(200);

  console.log(ball);
}

function draw() {
	background(200);

	/** add gravity to the object, update the position of the object */
	addGravity(ball);
	addGravity(ball2);
	ball.draw();
	ball2.draw();
	

	/** the perlin noise 2D graph view */
	// perlin.draw(startPoint);


	// noLoop();
}
