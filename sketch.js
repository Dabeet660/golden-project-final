const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var prince;
var ground;
var frank,james,louis;

var x1 = 0;
var x2;
var scrollspeed = 7;
var gameState = 0;


var score = 0;
var datetime;
var barrier;
var intro_sound;
var form;
var fps;


function preload(){
	backgroundImg = loadImage("images/bg.jpg")
  intro_sound = loadSound("sound/intro.mp3")
}

function setup(){
	createCanvas(displayWidth, displayHeight-115);

  intro_sound.loop()
	engine = Engine.create();
	world = engine.world;

  x2 = width;
  

  prince = new MPC(displayWidth/12,displayHeight/2-10,200,200); 
  ground = new Ground(displayWidth/2,displayHeight-100,windowWidth,10);
  frank = new Frank(displayWidth-20,displayHeight-150,200,200);
  james = new James(displayWidth-200,displayHeight-150,200,200);
  louis = new Loius(displayWidth-200,displayHeight-150,200,200);
  form = new Form();


}


function draw(){
 

  

    form.display();

    image(backgroundImg,x1,0,width,height);
    image(backgroundImg,x2,0,width,height);
  
   
  
    x1 -= scrollspeed;
    x2 -= scrollspeed;
    
    if (x1 < -width){
      x1 = width;
    }
    if (x2 < -width){
      x2 = width;
    }
  
    Engine.update(engine);
  
    if (gameState == 0){
      prince.display();
      ground.display();
  
      if(frameCount > 250){
        if(Math.round(prince.body.position.y < 600)){
          gameState = 1;
        }
       } 
    
       if(frameCount > 250){
         if(Math.round(prince.body.position.x < 0)){
          gameState = 1;
         }
       }
  
      if(frameCount>=150 && frameCount < 690){
        frank.display();
        Body.setVelocity(frank.body,{x:-2,y:0});
    
        if(Math.round(frank.body.position.x) - (-1*prince.body.position.x) < 1100){ 
          gameState = 1;
        }
        
      } 
      if(frameCount >= 700 && frameCount < 1200){
        frank.hide();
        james.display();
        Body.setVelocity(james.body,{x:-6,y:0});
      
      }
      if(frameCount >= 1250 && frameCount < 1750){
        frank.hide();
        james.hide();
        louis.display();
        Body.setVelocity(louis.body,{x:-10,y:0});
    
        if(Math.round(louis.body.position.x) - (-1*prince.body.position.x) < 250){
          gameState = 1;
        }
      }
    
     addScore();
     getTime();
      
      push();
      fill("Black");
      textSize(25);
      text("Gold:"+score +" bar(s)",displayWidth-200,20);
      text("Time" + datetime,displayWidth-400,20);
      pop();

      if(score == 75){
        gameState == 2
      }
    }
  
    if(gameState == 1){
      World.remove(world, frank.body)
      World.remove(world, louis.body)
      World.remove(world, james.body)
      World.remove(world, prince.body)
      scrollspeed = 0;
      score = 0;
      push();
      fill("Black")
      textSize(65)
      text("Please reload the page in order to play the game again.",150,450)
      pop();
    }

    if(gameState == 2){
      World.remove(world, frank.body)
      World.remove(world, louis.body)
      World.remove(world, james.body)
      World.remove(world, prince.body)
      scrollspeed = 0;
      score = 0;
      push();
      fill("Black")
      textSize(45)
      text("Congratulations! You have successfully earned 75 gold bars & have finished the game. Reload to play again.",150,450)
      pop();
    }
    
  

  
  drawSprites();
 
}

function keyPressed(){
  if(touches.length > 0 || keyCode == 32){
       Body.setVelocity(prince.body,{x:2,y:-12})
       touches = [];
  }
}

function addScore(){
   if(frameCount%60==0){
     score = score + 1
   }
}

async function getTime(){
  let response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  let respjson = await response.json();
  datetime = respjson.datetime.slice(11,16);
}