function Track(path, onload) {
	this.path = path;
	this.onload = onload || (() => {});
	
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
			this.loaded = true;
			this.onload();
		});
	};
	req.send();
};
