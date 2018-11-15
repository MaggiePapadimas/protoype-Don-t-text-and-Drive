//car
function Car (x, y, w, h, vx, vy, maxVSpeed, maxHSpeed, color){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = vx;
  this.vy = vy;
  this.maxVSpeed = maxVSpeed;
  this.maxHSpeed = maxHSpeed;
  this.color = color;
}
//displays the car
Car.prototype.display = function () {
  noStroke();
  fill(this.color);
  rect(this.x,this.y,this.w,this.h);
}
//updates the position
Car.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;
}
