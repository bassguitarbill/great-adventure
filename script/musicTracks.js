// Audio Loading
define(
    ['Track'], 
    function (Track) {
		
		return function(trackData) {
			
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			var audioContext = new window.AudioContext();

			var tracks = trackData.map(t => new Track(t.name, t.path, t.beat, onTrackLoad))
			
			function onTrackLoad() {
				console.log(tracks.filter(t => !t.loaded));
				var allTracksLoaded = !tracks.filter(t => !t.loaded).length;
				if(allTracksLoaded) {
					var audioElement = tracks[0].element;
					source = audioContext.createMediaElementSource(audioElement);
					source.connect(audioContext.destination);
					audioElement.play();
					window.setInterval(() => {
						console.log(
							Math.floor(source.mediaElement.currentTime / 0.219375) % 2
						);
					}, 1000/60);
				}
			};
			
			return tracks;
		}
    }
);
