define(function() {
	function Game(ctx) {
		this.running = false;
		this.ctx = ctx;

		var gameLoop = function(timeStamp) {
			if (this.running) {
				// get input
				this.actors.forEach(a => a.draw(ctx));

				this.actors.forEach(a => a.step(timeStamp));
			}
			window.requestAnimationFrame(gameLoop.bind(this));
		};

		this.actors = [];
		window.requestAnimationFrame(gameLoop.bind(this));
	};
	Game.prototype.addActor = function(a) {
		this.actors.push(a);
	};
	Game.prototype.unpause = function() {
		this.running = true;
	};
	Game.prototype.pause = function() {
		this.running = false;
	};

	return Game;
});
