class Snow{
    constructor(x,y,r){
        this.snow = Bodies.circle(x,y,r);
        this.r = r
        World.add(world ,this.snow);

        this.snowImg = loadImage("snow5.webp");
        
        
    }
    
    display(){
        var pos = this.snow.position;
        var angle = this.snow.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.snowImg, 0,0,this.r,this.r);
        pop();






    }
}