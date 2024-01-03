var car,carImage
var player,allPlayers
var obstacles
var background,backgroundImage,bg
var bullet,bullets
var fuel,fuelImage
var track
var gameState
var allGameObjects,obstacelsGroup
var bullet,bulletImage
var gun1,gun2,gunImage
var finishLineBlock,finishLineBlockImage
var gameDifficulty,gameDifficultyInput

function preload(){
  carImage = loadImage("assets/carWar.png")
  gunImage = loadImage("assets/gun1.png")
  backgroundImage = loadImage("assets/background1.png")
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)

  backGround()

  
  gameDifficulty = 10
  
  
  
  car = createSprite(windowWidth/2,windowHeight-40,20,20)
  car.addImage("car",carImage)
  
  gun1 = createSprite(car.x+5,car.y,20,20)
  gun1.addImage("gun",gunImage)

  gun2 = createSprite(car.x+5,car.y,20,20)
  gun2.addImage("gun",gunImage)

  finishLineBlock = createSprite(windowWidth/2,-windowHeight*3,windowWidth,50)
  
  
}

function draw() {
  background("black");
   
  gun1.x = car.x + 30
  gun1.y = car.y - 30
  gun1.scale = 1.5

  if(bg.y <= 200){
    bg.y = windowHeight/2
  }

  
  gun2.x = car.x - 35
  gun2.y = car.y - 30
  gun2.scale = 1.5

  drawSprites();
  playerMovements()
  spawnObstacles()
  play()
  mouseClicked()

  console.log(finishLineBlock.y)
  
}

function playerMovements(){
  if(keyIsDown(LEFT_ARROW)){
    car.position.x = car.position.x - 10
  }
  if(keyIsDown(RIGHT_ARROW)){
    car.position.x = car.position.x + 10
  }
  if(keyIsDown(UP_ARROW)){
    car.position.y = car.position.y - 10
    bg.position.y = bg.position.y - 10
    finishLineBlock.y = finishLineBlock.y+10
  }
  if(keyIsDown(DOWN_ARROW)){
    car.position.y = car.position.y + 10
    bg.position.y = bg.position.y + 10
    finishLineBlock.y = finishLineBlock.y - 10
  }

  //car.x = Mouse.position.x
}

function play(){
 // camera.position.y = car.position.y

 
 

 allGameObjects = new Group()

 //allGameObjects.add(car)
 //allGameObjects.add(obstacles)
 //allGameObjects.add(background)

 

 if(car.y<=windowHeight/2 + 200){
  car.y = windowHeight/2+200
  background.velocitY = -10
  
 }

 if(finishLineBlock.isTouching(car)){
  console.log("you won")
  gameState = 2
 }

}

function spawnObstacles(){
  if(frameCount*gameDifficulty % 60 == 0){
  var randX = Math.round(random(windowWidth - windowWidth + 400,windowWidth - 400))
  
  var randSize = Math.round(random(10,60))
  obstacles = createSprite(randX,-100,randSize,randSize)
  obstacles.velocityY = 10
  obstacelsGroup =  new Group()
  obstacelsGroup.add(obstacles)

  }
}

function mouseClicked(){
  bullet = createSprite(car.x,car.y,50,50)
  //bullet.addImage("bullet",bulletImage)
  bullet.velocityY = -60
}

function backGround(){
  bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  bg.addImage("background",backgroundImage)
  bg.scale = 5
}