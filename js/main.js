var MusicMaster = (function () {
	var mm = {
            context: new AudioContext(),
            oscilator: null
        };

    /**
     * Play a note of given frequency
     */
	mm.playNote = function(frequency) {
        this.oscilator = this.context.createOscillator();
        this.oscilator.type = "sine";
				this.oscilator.frequency.setValueAtTime(frequency, this.context.currentTime);
        this.oscilator.connect(this.context.destination);
        this.oscilator.start();
    };

    mm.stop = function() {
        if (this.oscilator) {
            this.oscilator.stop();
        };
    };


	return mm;
}());
