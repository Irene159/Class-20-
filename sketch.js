var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(150,150,50,50);
  movingRect=createSprite(150,350,80,30);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  fixedRect.debug=true;
  movingRect.debug=true;

  fixedRect.velocityY=3;
  movingRect.velocityY=-3;
 
}

function draw() {
  background("cyan");  

  console.log(movingRect.x-fixedRect.x);

  //START-collision algorithm code
  if(movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
     fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  //END-collision algorithm code

  //START-bounceOff algorithm code
  if(movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2){
      movingRect.velocityX=(-1)*movingRect.velocityX;
      fixedRect.velocityX=(-1)*fixedRect.velocityX;
  }
  if(movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY=(-1)*movingRect.velocityY;
      fixedRect.velocityY=(-1)*fixedRect.velocityY;
  }

  //START-bounceOff algorithm code

  drawSprites();
}