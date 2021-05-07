var bg, fighter, fighter2, fighterImg, fighter2Img;
var fighterJump, fighterKick, fighterBlock, fighterWalk;

function preload(){
  fighterImg = loadAnimation("Fighter stance 1.png");
  bg = loadImage("Background.jpeg");
  fighter2Img = loadImage("Fighter2 stance1.png");

  fighterBlock = loadAnimation("Fighter block.png");
  fighter2Block = loadAnimation("Fighter2 block.png");

  
  
}

function setup(){
  createCanvas(1800,900);
  fighter = createSprite(700,600,150,20);
  fighter.addAnimation("Stance",fighterImg);
  fighter.scale = 1.8;

  fighter2 = createSprite(1100,600,150,20);
  fighter2.addImage(fighter2Img);
  fighter2.scale = 1.8;
 


}

function draw(){
  background(bg);

  if(keyDown("Space")){
    fighter.changeAnimation("Block",fighterBlock);
  }

  drawSprites();
}