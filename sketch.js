var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redBoxleft,redBoxright,redBoxdown;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var redBoxright,redBoxleft,redBoxdown;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
/*	ground= new Ground(200,400,400,50);
	
		var ground_options ={
			isStatic: true
		}
	
		ground = Bodies.ground(200,390,200,20,ground_options);
		World.add(world,ground);
	
		
	
		packageSprite = Bodies.circle(200,100,20,packageSprite_options);
	*/ //	World.add(world,packageSprite);

	
redBoxright= new Box (400,200,20,100);
redBoxleft= new Box (400,300,20,100);
redBoxdown= new Box (450,250,200,20);


	engine = Engine.create();
	world = engine.world;
	redBoxdown=Bodies.rectangle(400,640,200,20,{isStantic:true})

	var ground_options ={
		isStatic:true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
redBoxright.diplay();
redBoxleft.display();
redBoxdown.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(redBoxdown,true);
  }
}



