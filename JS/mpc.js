class MPC{
    constructor(x,y,w,h){
        var options = { 
          restitution : 1
        } 
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("images/prince.png")

        World.add(world,this.body);

    }
    display(){
        var bodyx = this.body.position.x;
        var bodyY = this.body.position.y; 
        
        push();
        imageMode(CENTER);
        image(this.image,bodyx,bodyY,this.w,this.h);
        pop();
    }
}