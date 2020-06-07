var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 fixedRect = createSprite(200,200,50,50);
}

function draw() {
  background(0,255,150);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  movingRect.shapeColor=color(255,0,0);
  fixedRect.shapeColor=color(255,0,0);

  if (movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    
      movingRect.shapeColor=color(0,0,225);
      fixedRect.shapeColor=color(0,0,225);

  }

  drawSprites();
}