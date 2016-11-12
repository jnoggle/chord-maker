<?php
function createNoteDropDown($name) {
    return "<select name=\"$name\" id=\"$name\">\n".
            "<option value=' '> </option>\n".
            "<option value='C'>C</option>\n".
            "<option value='D'>D</option>\n".
            "<option value='E'>E</option>\n".
            "<option value='F'>F</option>\n".
            "<option value='G'>G</option>\n".
            "<option value='A'>A</option>\n".
            "<option value='B'>B</option>\n".
            "</select>\n";
}

function createPresetChords() {
    return "<button onClick=\"playCMajor()\">Play C Major</button>\n".
        "<button onClick=\"playDMinor()\">Play D Minor</button>\n".
        "<button onclick=\"playEMinor()\">Play E Minor</button>\n".
        "<button onclick=\"playFMajor()\">Play F Major</button>\n";
}
?>