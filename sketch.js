var ball = new Ball(100,100,{x:1.5,y:0});
var ball2 = new Ball(100,200,{x:3,y:5});

var perlin = new Perlin();
var startPoint = {
	x:0,
	y: 200
}

function setup() {
	
	// put setup code here
	createCanvas(windowWidth,400);
	background(200);
}

function draw() {
	background(200);

	/** add gravity to the object, update the position of the object */
	addGravity(ball,GRAVITY);
	addGravity(ball2,GRAVITY);
	ball.draw();
	ball2.draw();
	if(isCollision(ball, ball2)){
		textSize(32);
		textAlign(CENTER);
		text('BOOM', 50, 50);
		noLoop();
	}


	/** the perlin noise 2D graph view */
	// perlin.draw(startPoint);


	// noLoop();
}

function changeGravity(value){
	console.log(  parseFloat(value))
	GRAVITY = parseFloat(value);
	console.log(GRAVITY);
	
}