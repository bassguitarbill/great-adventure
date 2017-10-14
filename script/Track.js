function Track(path, onload) {
	this.path = path;
	this.onload = onload || (() => {});
	
	this.loaded = false;
	this.element = document.createElement('audio', {preload: 'auto', src: this.path});
	this.element.addEventListener('loadeddata', () => {this.loaded = true; this.onload();});
	this.element.src = this.path;
	
};

Track.prototype.load = function() {
	var req = new XMLHttpRequest();
	req.open('GET', this.path);
	req.responseType = 'arraybuffer';
	
	req.onload = () => {
		audioContext.decodeAudioData(req.response, buffer => {
			this.buffer = buffer;
			this.loaded = true;
			this.onload();
		});
	};
	req.send();
};
