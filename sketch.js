var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100, 150, 17, balls_options);
	World.add(world, ball);

	Engine.run(engine);
  
	groundObj=new ground(width/2,670,width,20);
	leftside = new ground(1100,600,20,120);
	rightside = new ground(1400,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 17);
  
  drawSprites();
 
  groundObj.display();
  leftside.display();
  rightside.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		 
		Matter.Body.applyForce(ball, ball.position, {x:45, y:-45})

	}
}

