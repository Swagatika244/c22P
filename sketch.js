const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var rope1, rope2, rope3, rope4, rope5;
var con;
var bob_options;
var world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	var roof_options={
		isStatic:true			
	}

	 

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob_options={ 
		isStatic:false,
		 restitution:1, 
		 friction:0, 
		 density:0.8 };

	bob1 = Bodies.circle(310,350,22.5,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(355,350,22.5,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(400,350,22.5,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(445,350,22.5,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(490,350,22.5,bob_options);
	World.add(world,bob5);

	con1 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob1,
		pointB:{x:0,y:0},
		lenght:100,
		stiffness:0.1,
	})
	World.add(world,con1);
	rope1=new Rope(bob1,roof,-80,0);
	rope2=new Rope(bob2,roof,-80+22.5,0);
	rope3=new Rope(bob3,roof,-80+45,0);
	rope4=new Rope(bob4,roof,-80+67.5,0);
	rope5=new Rope(bob5,roof,-80+90,0);

	Engine.run(engine);

/*
	con2 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob2,
		pointB:{x:0,y:0},
		lenght:100,
		stiffness:0.1,
	})
	World.add(world,con2);

	con3 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob3,
		pointB:{x:0,y:0},
		lenght:100,
		stiffness:0.1,
	})
	World.add(world,con3);

	con4 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob4,
		pointB:{x:0,y:0},
		lenght:100,
		stiffness:0.1,
	})
	World.add(world,con4);

	con5 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob5,
		pointB:{x:0,y:0},
		lenght:100,
		stiffness:0.1,
	})
	World.add(world,con5);
*/
	
  
}

function draw() {
  rectMode(CENTER);
  background("#ffe5b4");
  //Engine.update(engine);
/*
  //call display() to show ropes here
  push ();
  stroke (0);
  strokeWeight(3);
	line(bob1.position.x, bob1.position.y,355,roof.position.y);
	line(bob2.position.x, bob2.position.y,310,roof.position.y);
	line(bob3.position.x, bob3.position.y,400,roof.position.y);
	line(bob4.position.x, bob4.position.y,445,roof.position.y);
	line(bob5.position.x, bob5.position.y,490,roof.position.y);
pop();
push();
fill(0);
*/
rect(roof.position.x,roof.position.y,230,20);
//ropes
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  //create ellipse shape for multiple bobs here
	
	ellipse(bob1.position.x,bob1.position.y,45);
	ellipse(bob2.position.x,bob2.position.y,45);
	ellipse(bob3.position.x,bob3.position.y,45);
	ellipse(bob4.position.x,bob4.position.y,45);
	ellipse(bob5.position.x,bob5.position.y,45);
	
	
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1, bob1.position,{x:-50,y:-45});
	  }
	}