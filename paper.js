class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            friction:0.5,
            density:1.2,
        }
        this.radius = radius;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,this.radius/2,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(225,0,225);
        imageMode(CENTER);
        image(this.image,0,0,this.radius, this.radius);
        pop();
    }
}
