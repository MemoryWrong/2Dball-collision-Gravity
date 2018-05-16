class Perlin {
    constructor(){

    }

    //x, y are coordinates
    draw(startPoint){
        
        var x = startPoint.x;
        var y = startPoint.y;
        //calculate the noise y offset value;
        var yoff = map(noise(y), 0, 1, 0, height);

        beginShape();
        noFill();
        // draw the visualization of function in one frame and width is the window width
        for(let i = 0; i< width; i++){
            y+= 0.01;
            x+= 1;
            yoff = map(noise(y), 0, 1, 0, height);
            vertex(x, yoff);
        }
        endShape();

        startPoint.y-=0.01;
    }
}