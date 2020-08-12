
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var character;
var tree;
var stone;
var cons
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 character=new Character(235,420,200,300);
 tree=new Tree(650,320,300,350);
 stone=new Stone(100,100,70,70);
 cons=new Cons(stone.body,{x:500,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
character.display();
tree.display();
stone.display();
cons.display();

  drawSprites();
 
}



