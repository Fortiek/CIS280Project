/*
Attempt to get race selection from user, display race_info <p> for
selected race. The function is called after a user selects from the drop
down menu and hits the button with text "Select"

Ref for selection handling:
https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript

*/
var race = ["dwarf", "elf", "gnome", "halfelf", "halforc", "halfling", "human"];

function raceSelection(){
	var e = document.getElementById("race");
	var raceSel = e.options[e.selectedIndex].value;
	console.log(raceSel);	
	
	
};




