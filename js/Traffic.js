// adds cars into game
var startYs = [100, 210, 320, 435, 550]
// holds traffic
function Traffic ( vx, startX, endX, maxCar, images ){
  this.maxCar = maxCars ;
  this.vx = vx;
  this.startX = startX;
  this.endX = endX;
  this.carImages = images;
  this.cars = [];

}
// displays the cars
Traffic.prototype.display = function(){
  for(var i = 0; i < this.cars.length; i++){
    this.cars[i].display();
  }
}
// updates theur position and checks if cars are colliding
Traffic.prototype.update = function( player ){
  for(var i = this.cars.length - 1; i >= 0; i--){
    this.cars[i].update();
  if( this.cars[i].isColliding(player.car)){
      player.hit();
  }
// once cars are out of screen they are deleted
    if (player.lives > 0 && this.outOfScreen( this.cars[i] )){
      this.cars.splice( i, 1 );
      this.addCar( this.startX );
    }
  }
}

// adds cars
Traffic.prototype.addCar = function( startX ){
  var lane = (int)(random(0, startYs.length));
  var model = (int)(random(0, carImages.length));
  this.cars.push(new Car(startX, startYs[lane], 120, 60, this.vx, 0, 0, 0, "#00B2FF", this.carImages[model]));
}
// checks if car is out of screen
Traffic.prototype.outOfScreen = function( car ){
  if( car.x + car.w < this.endX ){
    return true;
  }
  return false;
}
