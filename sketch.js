var bg, backgroundImg ;
var stoneGroup;
function preload() {
  bgAnimation = loadAnimation("images/bg.jpg","images/bg.jpg","images/bg.jpg");
  ironImg = loadImage("images/iron.png")
  stoneImage = loadImage("images/stone.png")
}

function setup() {
  createCanvas(1000, 600);
  bg   = createSprite(300,300,300,300);
  iron = createSprite(100,450);
  bg.addAnimation("bgAnimation",bgAnimation);
  bg.scale = 2;
  iron.addImage(ironImg);
  iron.scale = 0.4;
  bg.velocityY = 4;
  edges=createEdgeSprites();
}

function draw() {
  background('black');  
  iron.bounceOff(edges[0]);
  iron.bounceOff(edges[1]);
  iron.bounceOff(edges[2]);
  iron.bounceOff(edges[3]);
if(bg.y > 750 ){
    bg.y = 0;
  }
  if (keyDown("up")){
    iron.y = iron.y -12 ;
  }
  if (keyDown("down")){
    iron.y = iron.y +12 ;
  }
  if (keyDown("left")){
    iron.x = iron.x -12 ;
  }
  if (keyDown("right")){
    iron.x = iron.x +12 ;
  }
  for( var i = 0 ; i<stoneGroup.length; i++){
    var temp = (stoneGroup).get(i);
    if(temp.isTouching(iron)){
        iron.collide(temp);
    }
}
  generateStones();
  drawSprites();   
}
function generateStones(){
  if(frameCount%70 == 0){
    var stone = createSprite(1200,random(150,350),40,10);
    stone.scale = 1;
    stone.velocityY = -4;
    stone.lifetime = 350;
    stoneGroup.add (stone);
  }
}