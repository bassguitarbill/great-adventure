define(function() {
	return function Track(path, onload) {
		this.path = path;
		this.onload = onload || (() => {});
		
		this.loaded = false;
		this.element = document.createElement('audio', {preload: 'auto', src: this.path});
		this.element.addEventListener('loadeddata', () => {this.loaded = true; this.onload();});
		this.element.src = this.path;
		
	};
});
