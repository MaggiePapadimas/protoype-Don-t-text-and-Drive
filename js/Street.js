//background
var gameScreen = 1;
// for street
function Street(x, y, image, maxBar) {
  this.x = x;
  this.y = y;
  this.image = image
  this.maxBar = maxBar
}

//updates the position of image
Street.prototype.update = function () {
  this.x -= scrollSpeed;
}

//displays the car
Street.prototype.display = function () {
  image(this.image, this.x, this.y);
}
// moves the simages
Street.prototype.outOfScreen = function(){
  if(this.x > -this.image.width){
    return false;
  }
  else{
    return true;
  }
}
