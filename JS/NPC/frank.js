class Frank{
    constructor(x,y,w,h){
        var options = {
            restitution : 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("images/frank.png")

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        this.body.velocity.y = 10;

        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
        rectMode(CENTER);
        pop();
    }
    hide(){
        // To hide an NPC when spawning the next one.  
        World.remove(world,this.body);  
    } 
}