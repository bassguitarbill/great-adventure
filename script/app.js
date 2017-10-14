requirejs.config({
});

requirejs(['musicTracks', 'trackData'], function(trackLoader, trackData) {
	
	var tracks = trackLoader(trackData);
	
});