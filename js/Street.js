//background
var scrollSpeed = 2;
var gameScreen = 1;

function Street(x, y, image, maxBar) {
  this.x = x;
  this.y = y;
  this.image = image
  this.maxBar = maxBar
}

//updates the position
Street.prototype.update = function () {
  this.x += scrollSpeed;
}


//displays the car
Street.prototype.display = function () {
  image(this.image, this.x, this.y);
}

Street.prototype.outOfScreen = function(){
  if(this.x < this.maxBar){
    return false;
  }
  else{
    return true;
  }
}

function City( images, maxBar ){
  this.images = images
  this.streets = [];
  this.maxBar = maxBar;
}

//displays the car
City.prototype.display = function () {
  gameScreen = 1;
  for(var i = 0; i < this.streets.length; i++){
    this.streets[i].display();
  }
}

City.prototype.update = function(){
  for(var i = this.streets.length -1; i >= 0; i--){
    this.streets[i].update();
    if(this.streets[i].outOfScreen()){
      this.streets.splice(i, 1);
      this.addStreet(-this.images[0].width);
    }
  }
}

City.prototype.addStreet = function ( x ){
  var number = (int)(random(0, this.images.length));
  console.log("Number: " + number + " size: "+this.images.length);
  this.streets.push(new Street(x, 0, this.images[number], this.maxBar));
}
