define(function() {
	function BeatEmitter(beat, mediaElement, downbeat, upbeat) {
		this.beat = beat;
		this.element = mediaElement;
		this.downbeat = downbeat || (() => {});
		this.upbeat = upbeat || (() => {});
		
		this.isDownbeat = true;
		
		this.intervalID = 0;
	};
	
	BeatEmitter.prototype.start = function() {
		this.intervalID = window.setInterval(intervalFunction.bind(this), 1000 / 60);
	};
	
	BeatEmitter.prototype.stop = function() {
		window.clearInterval(this.intervalID);
	};
	
	var intervalFunction = function() {
			var down = !!(Math.floor(this.element.currentTime / this.beat) % 2);
			if (down && !this.isDownbeat) {
				this.isDownbeat = true;
				this.downbeat();
			} else if (!down && this.isDownbeat) {
				this.isDownbeat = false;
				this.upbeat();
			}
		}
	
	return BeatEmitter;
});