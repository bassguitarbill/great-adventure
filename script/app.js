requirejs.config({
});

requirejs(['trackLoader', 'trackData', 'gameScreenContext', 'BeatEmitter', 'Rect'], function(trackLoader, trackData, ctx, BeatEmitter, Rect) {
	
	var tracks = trackLoader(trackData, function(tracks) {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		var audioContext = new window.AudioContext();
		var audioElement = tracks[0].element;
		var source = audioContext.createMediaElementSource(audioElement);
		source.connect(audioContext.destination);
		audioElement.play();
		var game = {addActor: a => {}};
		var be = new BeatEmitter(tracks[0].beat, source.mediaElement, function() {
			new Rect(game, Math.random() * 600, Math.random() * 800, 50, 50).draw(ctx);
		}, function() {
			new Rect(game, Math.random() * 600, Math.random() * 800, 20, 20).draw(ctx);
		});
		be.start();
	});
	
});
