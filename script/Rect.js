define(['Actor'], function(Actor) {
	function Rect(game,x,y,width,height) {
		Actor.call(this,game,x,y);
		this.width = width;
		this.height = height;
		this.color = "hsl(" + Math.floor(Math.random() * 360) + ", " + Math.floor(Math.random() * 100) + "%, " + Math.floor(Math.random() * 100) + "%)"; 
		this.lifetime = 12;
	}
	Rect.prototype = Object.create(Actor.prototype);
	Rect.prototype.constructor = Rect;
	
	Rect.prototype.draw = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x - (this.width/2), this.y - (this.height/2), this.width, this.height);
	}
	Rect.prototype.beat = function() {
		if(this.lifetime <= 0)
			this.dispose();
		this.lifetime --;
	}
	
	return Rect;
});