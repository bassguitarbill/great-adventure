// Audio Loading
define(
    ['Track'], 
    function (Track) {

        const TRACK_PATH = "assets/music/";
        const TRACK_PREFIX = "Hidden Machines - A GREAT ADVENTURE AWAITS - ";
        const TRACK_SUFFIX = ".mp3";
		
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var audioContext = new window.AudioContext();

        const TRACKS = [
            "01 Dance Like The Government Isn't Watching",
            "02 The Forests Are Alive and They Want Your Head",
            "03 And So Our Adventurers Left The Quiet Tavern And Began Their Journey",
            "04 The World Exactly As We Want It To Be",
            "05 This Party Sucks, Lets Go Home"
        ].map(t => new Track(TRACK_PATH + TRACK_PREFIX + t + TRACK_SUFFIX, onTrackLoad));

        function onTrackLoad() {
            var allTracksLoaded = !TRACKS.filter(t => !t.loaded).length;
            if(allTracksLoaded) {
                var audioElement = TRACKS[0].element;
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
        
        return TRACKS;
    }
);
