requirejs.config({
});

requirejs(
	[
		'trackLoader',
		'trackData',
		'gameScreenContext',
		'BeatEmitter',
		'Rect',
		'Game',
	], function(
		trackLoader, 
		trackData, 
		ctx, 
		BeatEmitter, 
		Rect,
		Game,
	) {

	var game = new Game(ctx);
	window.game = game;
	game.unpause();
	
	var tracks = trackLoader(trackData, function(tracks) {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		var audioContext = new window.AudioContext();
		var audioElement = tracks[0].element;
		var source = audioContext.createMediaElementSource(audioElement);
		source.connect(audioContext.destination);
		
		var playButton = document.getElementById("playButton");
		playButton.addEventListener("click", e => {audioElement.play()})
		var pauseButton = document.getElementById("pauseButton");
		pauseButton.addEventListener("click", e => {audioElement.pause()})
		
		var be = new BeatEmitter(tracks[0].beat, source.mediaElement, function() {
			new Rect(game, Math.random() * 600, Math.random() * 800, 50, 50);
		}, function() {
			new Rect(game, Math.random() * 600, Math.random() * 800, 20, 20);
		});
		be.start();
	});
	
});
