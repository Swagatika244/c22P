class Bob{
    constructor(x, y, r){
        var bob_options={ isStatic:false, restitution:1, friction:0, density:0.8 };
        this.body=Bodies.circle(x, y, r/2, bob_options);
        World.add(world,this.body);
        this.r=r;
        
    }
    show(){
        let pos = this.body.position;
        let angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0, this.r);
        pop ();
    }
}