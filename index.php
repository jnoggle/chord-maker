<?php
include ('functions.php');
include ('header.html');

echo createPresetChords();

echo '<br><br><br>';

echo createNoteDropDown("n1"). " ";
echo createNoteDropDown("n2"). " ";
echo createNoteDropDown("n3"). " ";
echo createNoteDropDown("n4"). "<br>";


include ('footer.html');
?>