const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var rope;
var con;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	var roof_options={
		isStatic:true			
	}

	var bob_opt ={
		isStatic:false,			
		frictionAir:0.01,
		restitution:0.1
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(355,350,22.5,bob_opt);
	World.add(world,bob1);

	bob2 = Bodies.circle(310,350,22.5,bob_opt);
	World.add(world,bob2);

	bob3 = Bodies.circle(400,350,22.5,bob_opt);
	World.add(world,bob3);

	bob4 = Bodies.circle(445,350,22.5,bob_opt);
	World.add(world,bob4);

	bob5 = Bodies.circle(490,350,22.5,bob_opt);
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

	
  
}

function draw() {
  rectMode(CENTER);
  background("#ffe5b4");
  Engine.update(engine);

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
rect(roof.position.x,roof.position.y,230,20);
pop();
  //create ellipse shape for multiple bobs here
	push();
	fill(40)
	ellipse(bob1.position.x,bob1.position.y,45);
	pop();
	
	push();
	fill(20)
	ellipse(bob2.position.x,bob2.position.y,45);
	pop ();


	push();
	fill(60)
	ellipse(bob3.position.x,bob3.position.y,45);
	pop ();


	push();
	fill(80)
	ellipse(bob4.position.x,bob4.position.y,45);
	pop ();


	push();
	fill(100)
	ellipse(bob5.position.x,bob5.position.y,45);
	pop ();
	keyPressed();
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==LEFT_ARROW){
		Matter.Body.applyForce(bob2,{x:0,y:0},{x:-0.008,y:0});
	  }
	}