
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeObj
var ground
var stoneObj
var boy
var mango1
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   treeObj = new Tree(990,250)
   ground = new Ground(400,600,1999,20);
   stoneObj= new Stone(215,410)
   mango1 = new Mango(900,150,50)
   
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  treeObj.display();
  ground.display();
  stoneObj.display();
  mango1.display();
  
  drawSprites();
 
}



