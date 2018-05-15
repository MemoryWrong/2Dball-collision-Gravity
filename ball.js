class Ball {

    constructor(x,y){
        // the coordinates of the position
        this.x = x;
        this.y = y;
        this.r = 20;

        // velocity
        this.velocity = {
            x:20,
            y:20
        }
        
    }

    draw(){
        // noStroke();
        fill(255);
        ellipse(this.x,this.y,this.r);
    }

    

    
}