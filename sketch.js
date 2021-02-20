const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, platform,platform2;
var block1;
var polygon,polygonImage;
var slingShot;
function preload() {
    polygonImage=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,height,1200,20);
    platform=new Ground(610,300,315,20); 
    platform2=new Ground(1000,170,275,20); 

    polygon= Bodies.circle(500,200,20);
    World.add(world,polygon);

    slingShot= new SlingShot(this.polygon,{x:100,y:200});

    //first bottom platform
    block1=new Block(470,265,30,50);
    block2=new Block(510,265,30,50);
    block3=new Block(550,265,30,50);
    block4=new Block(590,265,30,50);
    block5=new Block(630,265,30,50);
    block6=new Block(670,265,30,50);
    block7=new Block(710,265,30,50);
    block8=new Block(750,265,30,50);
    blockA=new Block2(490,215,30,50);
    blockB=new Block2(530,215,30,50);
    blockC=new Block2(570,215,30,50);
    blockD=new Block2(610,215,30,50);
    blockE=new Block2(650,215,30,50);
    blockF=new Block2(690,215,30,50);
    blockG=new Block2(730,215,30,50);
    block16=new Block(510,165,30,50);
    block17=new Block(550,165,30,50);
    block18=new Block(590,165,30,50);
    block19=new Block(630,165,30,50);
    block20=new Block(670,165,30,50);
    block21=new Block(710,165,30,50);
    blockH=new Block2(530,115,30,50);





    //second bottom platform
    block9=new Block(880,135,30,50);
    block10=new Block(920,135,30,50);
    block11=new Block(960,135,30,50);
    block12=new Block(1000,135,30,50);
    block13=new Block(1040,135,30,50);
    block14=new Block(1080,135,30,50);
    block15=new Block(1120,135,30,50);
    
    
    Engine.run(engine);
}
function draw(){
background("black");
Engine.update(engine);



ground.display();
platform.display();
platform2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

blockA.display();
blockB.display();
blockC.display();
blockD.display();
blockE.display();
blockF.display();
blockG.display(); 
blockH.display();
 

imageMode(CENTER)
image(polygonImage,polygon.position.x,polygon.position.y,40,40);

slingShot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.polygon);
    }
}