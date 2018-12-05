//Player

// These are the multiple keys that control the players car
//WASD, TFGH, IJKL, EVUN

// Up is W(87), T(84), I(73), C(67), B(66)
var UP_KEYS = [87, 84, 73, 67, 66 ];

// Left is A(65), F(70), J(74), V(72), M(77)
var LEFT_KEYS = [65, 70, 74, 86, 77];

// down is S(83), G(71), K(75), U(85), E(69)
var DOWN_KEYS = [83, 71, 75, 85, 69];

//Right is D(68), H(72), L(76), N(78), O(79)
var RIGHT_KEYS = [68, 72, 76, 78, 79];

var startLives = 2;
var hitTimer = 1750;
var flashCountLimit = 7;

var heartStartX = 20;
var heartStartY = 20;
var heartSpacing = 20;
var heartSize = 30;
//player
function Player ( car, minX, maxX, minY, maxY, phone, soundHit, heartImg ){
  this.car = car;
  this.minX = minX;
  this.maxX = maxX;
  this.minY = minY;
  this.maxY = maxY;

  this.phone = phone;
  // this deals with getting hit
  this.lives = startLives;
  this.hitTime = 0;
  this.isHit = false;
  this.flashOn = false;
  this.flashCount = 0;

  this.soundHit = soundHit;
  this.heartImg = heartImg
}

//updates the position
Player.prototype.update = function () {

  if(this.lives > 0){
    this.phone.addText();

    this.handleInput();
    this.car.update();
    this.car.vx = 0;
    this.car.vy = 0;

    if(this.isHit){
      // if the player was hit long enough ago they arent invincible anymore
      if(millis() - this.hitTime > hitTimer){
        this.isHit = false;
      }

      this.flashCount++;
      if(this.flashCount > flashCountLimit){
        this.flashOn = !this.flashOn;
        this.flashCount = 0;
      }
    }
    else this.flashOn = false;
  }

}

//displays the car
Player.prototype.display = function () {
  if(this.lives > 0){
    if(!this.flashOn) this.car.display();
  }
    this.phone.display();
    var heartXPos = heartStartX;
    for(var i = 0; i < this.lives;++i){


  image(this.heartImg,heartXPos,heartStartY, heartSize, heartSize);

  heartXPos += heartSpacing + heartSize;

  }
}

//controls the car
Player.prototype.handleInput = function(keyCode){
  if(this.lives > 0){
    this.phone.handleInput(keyCode);

    var vUp = 0;
    var vDown = 0;
    var vLeft = 0;
    var vRight = 0;
  // controls for car
    for(var i = 0; i < UP_KEYS.length; i++){

      if(keyIsDown(UP_KEYS[i]) && this.car.y > this.minY ){
        vUp = -this.car.maxVSpeed;
      }

      if(keyIsDown(DOWN_KEYS[i]) && this.car.y + this.car.h < this.maxY ){
        vDown = this.car.maxVSpeed;
      }

      if(keyIsDown(LEFT_KEYS[i]) && this.car.x > this.minX ){
        vLeft = -this.car.maxHSpeed;

      }

      if(keyIsDown(RIGHT_KEYS[i]) && this.car.x + this.car.w < this.maxX ){
        vRight = this.car.maxHSpeed;
      }
    }
  // gives smooth moving
    this.car.vx = vLeft + vRight;
    this.car.vy = vUp + vDown;
  }
}

Player.prototype.hit = function(){
  if (!this.isHit) {
      this.soundHit.play();
      this.hitTime = millis();
      this.isHit = true;
      this.lives--;

      if(this.lives == 0){

        this.phone.textID = 0;
        this.phone.waitTime = 2000

      }
  }
}
