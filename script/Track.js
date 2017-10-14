define(function() {
	return function Track(name, path, beat, onload) {
		this.name = name;
		this.path = path;
		this.beat = beat;
		this.onload = onload || (() => {});
		
		this.loaded = false;
		this.element = document.createElement('audio', {preload: 'auto', src: this.path});
		this.element.addEventListener('loadeddata', () => {this.loaded = true; this.onload();});
		this.element.src = this.path;
		
	};
});
