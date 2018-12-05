// NEW ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this is the texts that the player needs to answer to get points
//incoming texts for player

// this is for the text
var maxChars = 23;
function PhoneText(text, x, y, width, height, oldColor, currColor, nextColor, backgroundColor, soundType ){
  this.FullText = text;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
// color for text
  this.oldColor = oldColor;
  this.currColor = currColor;
  this.nextColor = nextColor;

  this.oldText = "";
  this.currentText = this.FullText.charAt(0);
  this.nextText = this.FullText.substring(1,this.FullText.length)
  this.backgroundColor = backgroundColor;
// position of text and flashing of text
  this.position = 0;
  this.flashCount = 0;
  this.flashReset = 20;
  this.flashOn = true;
  this.score = 0;
  this.soundType = soundType;
}
// displays the text
PhoneText.prototype.display = function () {
  textAlign(LEFT);
  textSize(30);
  fill(this.backgroundColor);
  rect(this.x,this.y,this.width,this.height);

  fill(this.oldColor);
  text(this.oldText, this.x, this.y, this.width, this.height);
  var spaces = "";

  for(var i = 0; i < this.oldText.length;++i){
    if(this.oldText.charAt(i) == " "){
      spaces += " ";
    }
    else spaces += "\xa0";
  }

  this.flashCount++;
  if(this.flashCount == this.flashReset){
    this.flashCount = 0;
    this.flashOn = ! this.flashOn;
  }
  if(this.flashOn)fill(this.currColor);
  else fill(0);
  text(spaces + this.currentText, this.x,this.y,this.width,this.height);

  if(this.currentText.charAt(0) == "_") spaces += " ";
  else spaces += "\xa0";


  fill(this.nextColor);
  text(spaces + this.nextText,this.x,this.y,this.width,this.height);

}
// this handles the text input
PhoneText.prototype.handleInput = function( character ) {
  // backspace = 8
  // enter = 13
  // space = 32

  // a = 65
  // z = 90

  if(this.position < maxChars && ( (character >= 65 && character <= 90) || character == 32)){
    this.soundType.play();
    this.position++;
    this.oldText += (char)(character).toLowerCase();
    if( this.FullText.charAt(this.position) == " " || this.position >= this.FullText.length){
          this.currentText ="_";
    }
    else{

      this.currentText =  this.FullText.charAt(this.position);
    }

    this.nextText = this.FullText.substring(1 + this.position, this.FullText.length)
  }

  if(character == 13){

    for(var i = 0; i < this.oldText.length; i++){
        if(this.oldText.charAt(i) == this.FullText.charAt(i)){
          this.score++;
        }
    }

    var unwrittenOrExtra = abs(this.FullText.length - this.oldText.length);
    if(unwrittenOrExtra > 0){
      this.score -= unwrittenOrExtra;
    }
    if(this.score < 1) this.score = 1;
    console.log(this.score + " / " + (1 + this.FullText.length));
  }
  if(character == 8 && this.position > 0){
    this.position--;
    this.oldText = this.oldText.substring(0,this.position);
    if( this.FullText.charAt(this.position) == " "){
      this.currentText = "_";
    }
    else this.currentText = this.FullText.charAt(this.position);
    this.nextText = this.FullText.substring(this.position + 1, this.FullText.length);
  }
}
