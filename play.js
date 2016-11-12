
function playChord(c1, c2, c3) {
    Synth instanceof AudioSynth;

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth;

testInstance === Synth;

    var piano = Synth.createInstrument('piano');
    piano.play(c1, 4, 5);
    piano.play(c2, 4, 5);
    piano.play(c3, 4, 5);
}

function playCMajor() {
    playChord('C', 'E', 'G');
}

function playDMinor() {
    playChord('D', 'F', 'A');
}

function playEMinor() {
    playChord('E', 'G', 'B');
}

function playFMajor() {
    playChord('F', 'A', 'C')
}

// window.setTimeout(playChord('A', 'D', 'F'), 10000);

