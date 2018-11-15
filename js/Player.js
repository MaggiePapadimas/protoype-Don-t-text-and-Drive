//Player


// These are the multiple keys that control the players car
//WASD, TFGH, IJKL, EVUN

// Up is W(87), T(84), I(73), E(69)
var UP_KEYS = [87, 84, 73, 69];

// Left is A(65), F(70), J(74), V(72)
var LEFT_KEYS = [65, 70, 74, 86];

// down is S(83), G(71), K(75), U(85)
var DOWN_KEYS = [83, 71, 75, 85];

//Right is D(68), H(72), L(76), N(78)
var RIGHT_KEYS = [68, 72, 76, 78];

//player
function Player (car){
  this.car = car;
}

//updates the position
Player.prototype.update = function () {
  this.handleInput();
  this.car.update();
  this.car.vx = 0;
  this.car.vy = 0;
}
//displays the car
Player.prototype.display = function () {
  this.car.display();
}
//controls the car
Player.prototype.handleInput = function(){

  var vUp = 0;
  var vDown = 0;
  var vLeft = 0;
  var vRight = 0;

  for(var i = 0; i < UP_KEYS.length; i++){

    if(keyIsDown(UP_KEYS[i])){
      vUp = -this.car.maxVSpeed;
    }

    if(keyIsDown(DOWN_KEYS[i])){
      vDown = this.car.maxVSpeed;
    }

    if(keyIsDown(LEFT_KEYS[i])){
      vLeft = -this.car.maxHSpeed;

    }

    if(keyIsDown(RIGHT_KEYS[i])){
      vRight = this.car.maxHSpeed;
    }
  }

  this.car.vx = vLeft + vRight;
  this.car.vy = vUp + vDown;
}
