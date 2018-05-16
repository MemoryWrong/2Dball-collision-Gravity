const addGravity = (object)=>{
    // add gravity accelerate velocity per frame in 1 unit of time.
    // for the velocity in X axis, don't use accelerate velocity for updating.
    object.velocity.y += GRAVITY;
    // 10 is ball the radius value + 2 pixels of the borders 
    if( object.y + object.velocity.y> 10 && object.y + object.velocity.y < height-10){
        object.y += object.velocity.y;
    }else{
        // when ball hit the ground change the direction of the speed vector 
        // in y axis
        console.log(object.velocity.y)
        object.velocity.y = -1*object.velocity.y;
    }

    if(10<object.x+object.velocity.x && object.x+object.velocity.x < width-10){
        object.x += object.velocity.x;
    }else{
        object.velocity.x = -1*object.velocity.x;
    }


    
}

// update the velocity after collision
const momentum =(object1, object2)=>{

}

//this collision function only check circle shape object collision
const isCollision = (object1, object2) =>{
    var disX = object1.x - object2.x;
    var disY = object1.y - object2.y;
    var dis = sqrt(disX **2 + disY **2);
    var _dis = (object1.r + object2.r)/2;

    if(dis <= _dis){
        // is collision
        console.log(object1,object2);
        console.log(dis,_dis);
        alert('BOOOM: '+dis+' '+_dis);

        return true;
    }
    return false;
}