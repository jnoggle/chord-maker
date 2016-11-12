
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

///////////plays single notes
function playNote(c1) {
    Synth instanceof AudioSynth;

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth;

testInstance === Synth;

    var piano = Synth.createInstrument('piano');
    piano.play(c1, 4, 5);
    
}


////funciton for 4 part harmony
function play7Chord(c1, c2, c3, c4) {
    Synth instanceof AudioSynth;

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth;

testInstance === Synth;

    var piano = Synth.createInstrument('piano');
    piano.play(c1, 4, 5);
    piano.play(c2, 4, 5);
    piano.play(c3, 4, 5);
    piano.play(c4, 4, 5)
}

////////////single notes
function playC() {
    playNote('C');
}

function playD() {
    playNote('D');
}
function playE() {
    playNote('E');
}
function playF() {
    playNote('F');
}
function playG() {
    playNote('G');
}
function playA() {
    playNote('A');
}
function playB() {
    playNote('B');
}


/////// 3 part harmony
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

function playGMajor() {
    playChord('G', 'B', 'D')
}

function playAMinor() {
    playChord('A', 'C', 'E')
}
function playBDim() {
    playChord('B', 'D', 'F')
}

//////start of 4 part harmony
function playCMajor7() {
    play7Chord('C', 'E', 'G', 'B');
}

function playDMinor7() {
    play7Chord('D', 'F', 'A', 'C');
}

function playEMinor7() {
    play7Chord('E', 'G', 'B', 'D');
}

function playFMajor7() {
    play7Chord('F', 'A', 'C', 'E')
}

function playGMajor7() {
    play7Chord('G', 'B', 'D', 'F')
}

function playAMinor7() {
    play7Chord('A', 'C', 'E', 'G')
}
function playBDim7() {
    play7Chord('B', 'D', 'F', 'A')
}

// window.setTimeout(playChord('A', 'D', 'F'), 10000);

