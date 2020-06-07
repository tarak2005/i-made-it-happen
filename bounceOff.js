var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
 movingRect= createSprite(200, 0, 50, 50);
 fixedRect = createSprite(200,400,50,50);
 movingRect.velocityY=5;
 fixedRect.velocityY=-5;
}

function draw() {
  background(0,255,150);

if( movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){

        movingRect.velocityY=movingRect.velocityY*(-1);
        fixedRect.velocityY=fixedRect.velocityY*(-1);


    }

drawSprites();

}