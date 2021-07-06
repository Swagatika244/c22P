const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5, bob;
var con;
var rope;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob3= new Bob(400,350,45);
	bob4= new Bob(445,350,45);
	bob5= new Bob(490,350,45);
	bob1= new Bob(355,350,45);
	bob2= new Bob(310,350,45);

	//rope = new Rope(roof,bob1);
	rope = new Rope(bob1);
	//console.log(bob1.pos.x);
  
}

function draw() {
  rectMode(CENTER);
  background("#ffe5b4");
  Engine.update(engine);

  //call display() to show ropes here
	
  rect(roof.position.x,roof.position.y,230,20);

  //create ellipse shape for multiple bobs here
	bob3.show();
	bob4.show();
	bob5.show();
	bob1.show();
	bob2.show();

	rope.show(roof.position.x,350,400,100);
	//rope.display(355,350,400,100);
	keyPressed();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.body.applyForce(bob1,{x:0,y:0},{x:10,y:0});
	  }
	  
	}
	
	