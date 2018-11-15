// menu
function Menu( color, w, h, playButton, controlButton ){
  this.color = color;
  this.x = w;
  this.y = h;
  this.playButton = controlButton;
  this.controlButton = controlButton;

  this.buttonX = this.x/2.5;
  this.playButtonY = this.y/4;
  this.controlButtonY = this.y/2;
}

//for clicking on screen
Menu.prototype.handleInput = function(x, y) {
  var width = this.playButton.width;
  var height = this.playButton.height;
  if(x > this.buttonX && x < this.buttonX + width){
    if(y > this.playButtonY && y < this.playButtonY + height){
      return 1;
    }
    else if(y > this.controlButtonY && y < this.controlButtonY + height){
      return 2;
    }
    else{
      return 0;
    }
  }
  else{
    return 0;
  }
}

//displays the menu
Menu.prototype.display = function() {
  gameScreen = 0;
  background(this.color);
  textSize(50);
  fill(0);
  textAlign(CENTER);
  text("Games Title", this.x/2, this.y/5);
  image(this.playButton, this.buttonX, this.playButtonY);
  image(this.controlButton, this.buttonX, this.controlButtonY);
}

// ***************************************************************************
// this screen is for the controls Menu
// this wscreen will have small animations (images will pulsate)
// will have explination
//
//controls are;
// 1.WASD to drive your car;
// 2.keyboard to answer your texts;

function ControlScreen( color, w, h, controlImage, keyboardImage, menuButton, playButton ) {
  this.color = color;
  this.x = w;
  this.y = h;
  this.controlImage = controlImage;
  this.keyboardImage = keyboardImage;
  this.menuButton = menuButton;
  this.playButton = playButton;

  this.buttonX = this.x/2;
  this.playButtonY = this.y/4;
  this.menuButtonY = this.y/2;
}

//for clicking on screen
ControlScreen.prototype.handleInput = function(x, y) {
  var width = this.menuButton.width;
  var height = this.menuButton.height;
  if(x > this.buttonX && x < this.buttonX + width){
    if(y > this.playButtonY && y < this.playButtonY + height){
      return 1;
    }
    else if(y > this.menuButtonY && y < this.menuButtonY + height){
      return 2;
    }
    else{
      return 0;
    }
  }
  else{
    return 0;
  }
}

//displays the menu
ControlScreen.prototype.display = function() {
  gameScreen = 2;
  background(this.color);
  textSize(50);
  fill(0);

  text("INSTRUCTIONS", this.x/2, this.y/5);

  image(this.playButton, this.buttonX, this.playButtonY);
  image(this.menuButton, this.buttonX, this.menuButtonY);
}
