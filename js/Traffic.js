// adds cars into game
var startYs = [170, 270]
// holds traffic
function Traffic ( vx, startX, endX ){
  this.maxCar = 5;
  this.vx = vx;
  this.startX = startX;
  this.endX = endX;
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
    this.cars[i].isColliding(player.car);
// once cars are out of screen they are deleted
    if (this.outOfScreen( this.cars[i] )){
      this.cars.splice( i, 1 );
      this.addCar( this.startX );
    }
  }
}

// adds cars
Traffic.prototype.addCar = function( startX ){
  var number = (int)(random(0, startYs.length));
  this.cars.push(new Car(startX, startYs[number], 120, 60, this.vx, 0, 0, 0, "#00B2FF"));
}
// checks if car is out of screen
Traffic.prototype.outOfScreen = function( car ){
  if( car.x + car.w < this.endX ){
    return true;
  }
  return false;
}
