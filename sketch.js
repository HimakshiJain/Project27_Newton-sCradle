
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(750,600,60);
	bob2 = new Bob(870,600,60);
	bob3 = new Bob(990,600,60);
	bob4 = new Bob(1110,600,60);
	bob5 = new Bob(1230,600,60);

	roof = new Roof(800,100,700,40);

	rope1 = new Rope(bob1.body,roof.body,-240,0);
	rope2 = new Rope(bob2.body,roof.body,-120,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,120,0);
	rope5 = new Rope(bob5.body,roof.body,240,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1600,y:-1600});

    }
}




