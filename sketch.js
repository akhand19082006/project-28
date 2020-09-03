
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango11,mango12;
var rope1,boy,stone;


function preload()
{
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(900,370,600,700);
mango = new Mango(650,200,60);
mango1 = new Mango(750,300,60);
mango2 = new Mango(1000,183,60);
mango3 = new Mango(850,170,60);
mango4 = new Mango(900,100,60);
mango5 = new Mango(950,212,60);
mango6 = new Mango(960,50,60);
mango7 = new Mango(1050,200,60);
mango8 = new Mango(1100,220,60);
mango9 = new Mango(1150,300,60);
mango10 = new Mango(1200,270,60);
mango11 = new Mango(770,150,60);
mango12 = new Mango(650,270,60);


stone = new Stone(220,500,40);
rope1 = new Rope(stone.body,{x:220,y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  stone.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
 //imageMode(CENTER);
 image(boy,200,450,200,300);
  stone.display();
 rope1.display();
 detectCollition(stone,mango);
 detectCollition(stone,mango1);
 detectCollition(stone,mango2);
 detectCollition(stone,mango4);
 detectCollition(stone,mango3);
 detectCollition(stone,mango5);
 detectCollition(stone,mango6);
 detectCollition(stone,mango7);
 detectCollition(stone,mango8);
 detectCollition(stone,mango9);
 detectCollition(stone,mango10);
 detectCollition(stone,mango11);
 detectCollition(stone,mango12);
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
rope1.fly();
}

function detectCollition(object1,object2){
var distance = dist (object1.body.position.x,object1.body.position.y,object2.body.position.x,object2.body.position.y)
if (distance<=object1.r+object2.radius)
{
Matter.Body.setStatic(object2.body,false)



}
}