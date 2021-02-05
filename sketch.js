var fixedRect , movingRect;


function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(200,200,50,80);
movingRect = createSprite(400,200,80,30);
fixedRect.shapeColor="lightblue";
movingRect.shapeColor="lightgreen";
}

function draw() {
  background(255,255,255); 
  movingRect.x = mouseX;
   movingRect.y = mouseY;
   console.log(movingRect.x - fixedRect.x);
   if ( movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 
    && fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2) {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
    }
else
{
  fixedRect.shapeColor="lightblue";
  movingRect.shapeColor="lightgreen";
     
}



   
  drawSprites();
}