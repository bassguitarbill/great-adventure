requirejs.config({
});

requirejs(['trackLoader', 'trackData', 'gameScreenContext', 'BeatEmitter'], function(trackLoader, trackData, ctx, BeatEmitter) {
	
	var tracks = trackLoader(trackData, function(tracks) {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		var audioContext = new window.AudioContext();
		var audioElement = tracks[0].element;
		var source = audioContext.createMediaElementSource(audioElement);
		source.connect(audioContext.destination);
		audioElement.play();
		var be = new BeatEmitter(tracks[0].beat, source.mediaElement, function() {
			ctx.fillStyle = 'rgb(200,0,0)'; // sets the color to fill in the rectangle with
			ctx.fillRect(10, 10, 55, 50);
		}, function() {
			ctx.fillStyle = 'rgb(0,0,200)'; // sets the color to fill in the rectangle with
			ctx.fillRect(10, 10, 55, 50);
		});
		be.start();
		window.setTimeout(() => {audioElement.pause()},5000);
	});
	
});
