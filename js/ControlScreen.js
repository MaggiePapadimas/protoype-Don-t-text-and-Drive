// // this screen is for the controls Menu
// // this wscreen will have small animations (images will pulsate)
// //
// //controls are;
// // 1.WASD to drive your car;
// // 2.keyboard to answer your texts;
// // 3.
//
// function ControlScreen( x, y, w, h, controlImage, keyboardImage, menuButton, menuButtonY, playBut, playButY, buttonX ) {
//   this.x = x;
//   this.y = y;
//   this.w = w;
//   this.h = h;
//   this.controlImage = controlImage;
//   this.keyboardImage = keyboardImage;
//   this.menuButton = menuButton;
//   this.menuButtonY = menuButtonY;
//   this.playButt = playBut;
//   this.playButY = playButY;
//   this.buttonX = buttonX;
// }
//
// //for clicking on screen
// ControlScreen.prototype.handleInput = function(x, y) {
//   var width = this.menuBut.width;
//   var height = this.menuBut.height;
//   if(x > this.buttonX && x < this.buttonX + width){
//     if(y > this.playButY && y < this.playButY + height){
//       return 1;
//     }
//     else if(y > this.menuButtonY && y < this.menuButtonY + height){
//       return 2;
//     }
//     else{
//       return 0;
//     }
//   }
//   else{
//     return 0;
//   }
// }
//
// //displays the menu
// ControlScreen.prototype.display = function() {
//   gameScreen = 0;
//   background(this.color);
//   textSize(35);
//   fill(0);
//   text("PONG", this.w/2, this.w/4);
//   image(this.playButton, this.buttonX, this.controlButtonY);
//   image(this.controlButton, this.buttonX, this.controlButtonY);
// }
