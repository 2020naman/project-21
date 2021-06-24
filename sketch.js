
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftSide;
var rightSide;	


function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,670,width,20);
    leftSide=new Ground(800,600,20,150);
	rightSide=new Ground(1130,600,20,150)
    

    var ball_options={
      isStatic: false,
	  restitution: 0.03,
      friction: 0,
	  density: 1.2
	  
	}
    fill("white");

    ball = Bodies.circle(200,400,15,ball_options);
    World.add(world,ball);

    rectMode(CENTER);
    ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {

  background(0);

  ellipse(ball.position.x,ball.position.y,15);

  ground.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);

if(keyDown(UP_ARROW)){
	throwBall();
}
ball.collide=true;
  drawSprites();
}

function throwBall(){
  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:15,y:-0.02})
  }	
}

