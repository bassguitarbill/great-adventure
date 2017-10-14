requirejs.config({
});

requirejs(['trackLoader', 'trackData'], function(trackLoader, trackData) {
	
	var tracks = trackLoader(trackData, function(tracks) {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		var audioContext = new window.AudioContext();
		var audioElement = tracks[0].element;
		var source = audioContext.createMediaElementSource(audioElement);
		source.connect(audioContext.destination);
		audioElement.play();
		window.setInterval(() => {
			console.log(
				Math.floor(source.mediaElement.currentTime / tracks[0].beat) % 2
			);
		}, 1000/60);
	});
});