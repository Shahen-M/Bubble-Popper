
function Bubble(x, y) {
  this.x = x;
  this.y = y;

	this.velX = 0;
  this.velY = 5;

  this.bounds = function() {
  	if(this.y > window.innerHeight + 150){
    	return true;
    }
  }

  this.update = function() {
  	this.x += this.velX;
    this.y += this.velY;
  }

  this.show = function() {
    image(bubble_img, this.x, this.y);
  }

  this.clicked = function(){
  	var d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 130){
      return true;
    }
  }

}
