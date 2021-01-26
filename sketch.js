var canvas;
var music;
var surface1, surface2;
var surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
    canvas = createCanvas(600,400);
    
 
surface1 = createSprite(80,380,120,20);
surface1.shapeColor = "blue";

surface2 = createSprite(220,380,120,20);
surface2.shapeColor = "red";

surface3 = createSprite(360,380,120,20);
surface3.shapeColor = "purple";

surface4 = createSprite(500,380,120,20);
surface4.shapeColor = "green";

    //create box sprite and give velocity

box = createSprite(random(20,750),40,40);
box.shapeColor = "white";
box.velocityX = -2;
box.velocityY = 2;



}

function draw() {
    background("skyblue");
    


    edges = createEdgeSprites();
    box.bounceOff(edges);
    
  
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        surface1.shapeColor = "yellow";
        box.shapeColor = "blue";
        

    }   
    else{
        surface1.shapeColor = "blue";
        box.shapeColor = "orange";
        
    }
    


    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        surface2.shapeColor = "yellow";
        box.shapeColor = "red";
       
    }
    else{
        surface2.shapeColor = "red";
        box.shapeColor = "orange";
        
    }
    
    
    
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        surface3.shapeColor = "yellow";
        box.shapeColor = "purple";
       
    }
    else{
        surface3.shapeColor = "purple";
        box.shapeColor = "orange";
        
    }
     
     
    
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        surface4.shapeColor = "yellow";
        box.shapeColor = "green";
       
    }
    else{
        surface4.shapeColor = "green";
        box.shapeColor = "orange";
        
    }



    
drawSprites();
}












