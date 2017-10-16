define(function() {
	const OFFBEAT = 0;
	const ONBEAT = 1;
	const MIDBEAT = 2;
	
	function Game(ctx) {
		this.running = false;
		this.ctx = ctx;
		this.beatStatus = OFFBEAT;

		var gameLoop = function(timeStamp) {
			if (this.running) {
				// get input
				ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				this.actors.forEach(a => a.draw(ctx));
				
				if(this.beatStatus == ONBEAT) {
					this.actors.forEach(a => a.beat(timeStamp));
					this.beatStatus = OFFBEAT
				}

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
	Game.prototype.removeActor = function(actor) {
		this.actors = this.actors.filter(a => a !== actor);
	};
	Game.prototype.unpause = function() {
		this.running = true;
	};
	Game.prototype.pause = function() {
		this.running = false;
	};
	Game.prototype.beat = function() {
		if(this.beatStatus == OFFBEAT) {
			this.beatStatus = ONBEAT;
		};
	};

	return Game;
});
