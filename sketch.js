
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var plane;
var hammer
var iron;
var rubber;
var stone;
var sand1,sand2,sand3,sand4,sand5;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
    //Create the Bodies Here.
     plane = new Plane(600,height,1200,20);
	hammer = new Hammer(100,100);
	iron = new Iron(920,320,70,70);	
	rubber = new Rubber(920,370,70);
	stone = new Stone(920,240,70,70);
	sand1 = new Sand(920,280);
	sand2 = new Sand(920,290);
	sand3 = new Sand(920,300);
	sand4 = new Sand(920,310);
	sand5 = new Sand(920,320);
  
}


function draw() {
  background(0);

Engine.update(engine);
  
plane.display();
hammer.display();
iron.display();
rubber.display();
stone.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();

 
}



