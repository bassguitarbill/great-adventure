// Audio Loading
define(
    ['Track'], 
    function (Track) {
		
		return function(trackData, allTracksCallback) {

			var tracks = trackData.map(t => new Track(t.name, t.path, t.beat, onTrackLoad))
			
			function onTrackLoad() {
				var allTracksLoaded = !tracks.filter(t => !t.loaded).length;
				if(allTracksLoaded) {
					allTracksCallback(tracks);
				}
			};
			
			return tracks;
		}
    }
);
