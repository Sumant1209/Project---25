const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (200, 693, 25);
	ground = new Ground(800,695, 1600, 10);

    box1 = new Box(1125, 575, 15, 175);
	box3 = new Box(1275, 575, 15, 175);

	dust = new Dustbin(1200, 585, 200, 200)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  keyPressed();

  box1.display();
  box3.display();
  paper.display();

  ground.display();
  dust.display();


  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  // Look at the hints in the document and understand how to make the package body fall only on
	  Matter.Body.applyForce(paper.body,paper.body.position, {x : 0.8, y:-7});
	}
  }


