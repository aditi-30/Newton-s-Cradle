
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;



var bob1,bob2,bob3,bob4
var roof
var rope, rope2, rope3, rope4
var bobObject1,bobObject2, bobObject3, bobObject4
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	/*bob1= new Bob(350,400,50)
	bob2= new Bob(400,400,50)
	bob3= new Bob(450,400,50)
	
	bob4= new Bob(500,400,50)
	bob5= new Bob(550,400,50)
*/

	ground= new Roof(width/2,height/4,width/7,20)

	var bobDiameter=50		
	

	//Create the Bodies Here.
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope= new Rope(bobObject1.body,ground.body,-bobDiameter*2, 0)
	rope2= new Rope(bobObject2.body,ground.body,-bobDiameter*1, 0)
	rope3= new Rope(bobObject3.body,ground.body,0,0)
	rope4= new Rope(bobObject4.body,ground.body,bobDiameter*1,0)
	rope5= new Rope(bobObject5.body,ground.body,bobDiameter*2,0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);
  
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
	
	ground.display()
	rope.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	//keyPressed()
	


 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	
	  }

}



