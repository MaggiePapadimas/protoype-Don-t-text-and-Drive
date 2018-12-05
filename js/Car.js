// cars to dodge
//
function IsInside(x, y, boxX, boxY, boxWidth, boxHeight){
// stops car from leaving road
  if(x >= boxX && x <= boxX + boxWidth){
    if(y >= boxY && y <= boxY + boxHeight){
      return true;
    }
  }
   return false;
}


//car
function Car (x, y, w, h, vx, vy, maxXSpeed, maxYSpeed, color, img){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = vx;
  this.vy = vy;
  this.maxHSpeed = maxXSpeed;
  this.maxVSpeed = maxYSpeed;
  this.color = color;
  this.img = img;

}

//displays the car
Car.prototype.display = function () {
  gameScreen = 1;
  noStroke();
  fill(50,50,50,100);
  rect(this.x,this.y,this.w,this.h);

  image(this.img,this.x,this.y, this.w, this.h);
}

//updates the position
Car.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;
}
// checks for collisison with other cars
Car.prototype.colliding = function( otherCar ){
  var x1 = this.x;
  var y1 = this.y;

  var x2 = x1 + this.w;
  var y2 = y1;

  var x3 = x1;
  var y3 = y1 + this.h;

  var x4 = x1 + this.w;
  var y4 = y1 + this.h;

  if(IsInside( x1, y1, otherCar.x, otherCar.y, otherCar.w, otherCar.h )){return true}
  else if(IsInside( x2, y2, otherCar.x, otherCar.y, otherCar.w, otherCar.h )){return true}
  else if(IsInside( x3, y3, otherCar.x, otherCar.y, otherCar.w, otherCar.h )){return true}
  else if(IsInside( x4, y4, otherCar.x, otherCar.y, otherCar.w, otherCar.h )){return true}
  else{return false};
}
// if player collides with other car it turns blue
Car.prototype.isColliding = function( otherCar ){
  if(this.colliding( otherCar )){
    return true;
  }
  else if(otherCar.colliding( this )){
    return true;
  }
  return false;
}
