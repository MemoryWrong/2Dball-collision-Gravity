function setup() {
  // put setup code here
  console.log('hello');
  
}

function draw() {
  var value = 25;
  var m = map(value, 0, 100, 0, width);
  // console.log(m);
  ellipse(m, 50, 10, 10);
  // put drawing code here
  // console.log('hello');
}