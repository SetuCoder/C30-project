const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var bird, slingshot;
var score = 0;
var counter = 1000;
var bird1 = 1;
var gameState = bird1; 
var bird2 = 2;


function preload() {
     bgimg = loadImage("sprites/bg.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,395,1200,10);
    ground2 = new Ground(900,170,200,10);
    platform = new platform(210,303,70,172);

    sc = new Score(1100,15,50,20);

    box1 = new Box(550,320,50,50);
    box2 = new Box(600,320,50,50);
    box3 = new Box(650,320,50,50);
    box4 = new Box(700,320,50,50);
    box5 = new Box(750,320,50,50);
    box6 = new Box(575,270,50,50);
    box7 = new Box(625,270,50,50);
    box8 = new Box(675,270,50,50);
    box9 = new Box(725,270,50,50);
    box10 = new Box(600,220,50,50);
    box11 = new Box(650,220,50,50);
    box12 = new Box(700,220,50,50);
    box13 = new Box(650,170,50,50);

    box14 = new Box2(850,160,50,40);
    box15 = new Box2(895,160,50,40);
    box16 = new Box2(940,160,50,40);
    box17 = new Box2(870,140,50,40);
    box18 = new Box2(915,140,50,40);
    box19 = new Box2(890,120,50,40);
    
    bird = new Bird(200,55);
    bird2 = new Bird2(200,85);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(bgimg);
    Engine.update(engine);

    noStroke();
        textSize(40)
        fill(255);
        text(""+ score, 1100, 85);

    ground.display();
    ground2.display();
    platform.display();
    sc.display();

    box1.display();
    box1.score();
    box2.display(); 
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box6.score();
    box8.display();
    box8.score();
    box9.display();
    box10.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();

    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();

    bird.display();
    bird2.display();
    slingshot.display();  
    
    counter--
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

    if(gameState === bird2){
        Matter.Body.setPosition(bird2.body, {x: mouseX , y: mouseY});
        Matter.Body.setPosition(bird.body,{x: -100 , y:-100});
    }

}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){ 
 if(keyCode===32){
     gameState = bird2;

     if(gameState === bird2){
    World.remove(world, bird.body);
    slingshot.attach(bird2.body)
    Matter.Body.setPosition(bird2.body,{x:200, y:50});
}
 }
}

 