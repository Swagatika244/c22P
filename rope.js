class Rope{
	constructor(){
		/*this.pointA=pointA;
		this.pointB=pointB;*/

		// var options ={
		// 	bodyA:body1,
		// 	bodyB:body2,
		// 	pointB:{x:this.pointA,y:this.pointB}
		// }
		//  con =Matter.Constraint.create({
		// 	bodyA:roof,
		// 	pointA:{x:0, y:0},
		// 	bodyB:bob,
		// 	pointB:{x:0, y:0},
		// 	length:100,
		// 	stiffness:0.1,
			
		// })
		con = Matter.Constraint.create({
			bodyA:roof,
			pointA:{x:0,y:0},
			bodyB:bob,
			pointB:{x:0,y:0},
			lenght:100,
			stiffness:0.1,
		})
		

	}show (x1, y1, x2, y2){
		/*var pointA=this.bodyA.rope.position;
		var pointB=this.bodyB.rope.position;
		line(pointA.x,pointA.y,pointB.x,pointB.y);*/
		
		
			line(x1, y1, x2, y2);
		}
	}
