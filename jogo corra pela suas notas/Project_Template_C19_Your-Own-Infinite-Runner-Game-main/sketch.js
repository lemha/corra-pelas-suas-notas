var menino, menino_running, menino_collided;
var ground, invisibleGround;
var obstaculos, obstaculos1, obstaculos2;
var Jogar = 1;
var encerrar = 0;
var score;
var grupodeobstaculos;
var estadoJogo = Jogar;
var gameOver, gameOverimage;
var botaoderestart, botaoderestartimage;
var obstaculo;
var obstaculoo;
var background;
var background2;
var barreirainvisivel;
var tela;


function preload() {
  menino_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png");
  menino_collided = loadAnimation("collided_0.png", "collided_1.png", "collided_2.png");
  obstaculos1 = loadImage("download.jpg");
  obstaculos2 = loadImage("poste.png");
  botaoderestartimage = loadImage("botaoderestart.png");
  background2 = loadAnimation("background_0.png", "background_1.png", "background_2.png", "background_3.png", "background_4.png", "background_5.png", "background_6.png")



}

function setup() {
  createCanvas(1365, 625);
  background1 = createSprite(0, 0, 625, 1365);
  background1.scale = 3;
  background1.addAnimation("background", background2);
  background1.velocityX = 2;
  menino = createSprite(130, 300, 20, 50);
  menino.addAnimation("running", menino_running);
  barreirainvisivel = createSprite(130, 2, 1365, 300);
  barreirainvisivel.visible = false;
  grupodeobstaculos = createGroup();
}

function draw() {

  menino.collide(barreirainvisivel);
  background(180);
  drawSprites();
  obs();
  menino.y = World.mouseY;
  if (grupodeobstaculos.isTouching(menino)) {
    console.log("tocou");
    tela = createSprite(680, 312, 1365, 625);
    tela.shapeColor = "blue";
    grupodeobstaculos.setVelocityXEach(0);
    grupodeobstaculos.destroyEach();
    grupodeobstaculos.setLifetimeEach(0);

  }

  
}
function obs() {
  if (frameCount % 60 === 0) {
   
    obstaculos = createSprite(1365, 350, 10, 30);
    obstaculos.velocityX = -14;
    var aleatorio = Math.round(random(1, 2));
    switch (aleatorio) {
      case 1: obstaculos.addImage(obstaculos1);
        obstaculos.scale = 0.5;
        obstaculos.y = 550;
        break;
      case 2: obstaculos.addImage(obstaculos2);
        obstaculos.scale = 0.75;
        obstaculos.y = 200;
        break;
      default: break;
    }

    obstaculos.lifetime = 190;
    grupodeobstaculos.add(obstaculos);
  }
}