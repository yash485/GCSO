var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
   car = createSprite(50,200,50,50);
   car.velocityX = 5;
   
  wall = createSprite(1500,200,60,100);

  speed=random(25,31);
  weight=random(400,1500);
}

function draw() {
   background(0);
    if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180) {
    car.shapeColor=color(255,0,0);
    } 
    if(deformation>100){
      car.shapeColor=Color("green");
      wall.shapeColor=Color("white");
    }
    if(deformation<180 && deformation>100) {
    car.shapeColor=color(230,230,0);
    } 
    if(deformation<100) {
    car.shapeColor=color("red");
    wall.shapeColor=Color("white");
    }
    } 
    drawSprites(); 
}

