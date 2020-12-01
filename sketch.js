var wall,bullet;
var speed,weight;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "grey";
 // wall.debug = true;
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "red";
  //bullet.debug = true;
  speed=random(55,90)
  weight=random(400,1500)

  bullet.velocityX = speed;
  
}

function draw() {
  background(0,0,0);  

     
   
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
    var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180){
    bullet.shapeColour=colour(255,0,0)
    }
    if(deformation<180 && deformation>100){
    bullet.shapeColour=colour(230,230,0)
    }
    if(deformation<100){
    bullet.shapeColour=colour(0,255,0)
    }
  }
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.sprite.x+lbullet.sprite.width
  wallLeftEdge=lwall.sprite.x
  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRigthEdge >=wallLeftEdge){
    return true
  }
  return false
}
