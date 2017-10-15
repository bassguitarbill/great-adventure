define(function() {
	function Actor(game, x, y) {
		this.x = x;
		this.y = y;
		
		game.addActor(this);
	};
	Actor.prototype.move = function(x,y) {
		this.x += x;
		this.y += y;
	};
	Actor.prototype.draw = function() {
		throw ("Error on actor: no 'draw' method defined! " + this);
	};
	Actor.prototype.step = function() {
	};
	
	return Actor;
});
