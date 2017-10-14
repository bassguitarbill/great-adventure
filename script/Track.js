function Track(path) {
	this.path = path;
	this.loaded = false;
	this.buffer = null;
	
	this.load();
};

Track.prototype.load = function() {
	var req = new XMLHttpRequest();
	req.open('GET', this.path);
	req.responseType = 'arraybuffer';
	
	req.onload = () => {
		audioContext.decodeAudioData(req.response, buffer => {
			this.buffer = buffer;
		});
	};
	req.send();
};
