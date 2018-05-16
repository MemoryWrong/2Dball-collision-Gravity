class Ball{

    constructor(x,y, velocity){
        // the coordinates of the position
        this.x = x;
        this.y = y;
        this.r = 20;

        this.velocity = velocity;
    }

    draw(){
        // noStroke();
        fill(0);
        noStroke();
        ellipse(this.x,this.y,this.r);
    }

    

    
}