
/*
Attempt to get race selection from user, display race_info <p> for
selected race. The function is called after a user selects from the drop
down menu and hits the button with text "Select"

Ref for selection handling:
https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript

*/

var str = 10;
var dex = 10;
var con = 10;
var intel = 10;
var wis = 10;
var cha = 10;

var strMod = 0;
var dexMod = 0;
var conMod = 0;
var intelMod = 0;
var wisMod = 0;
var chaMod = 0;


function raceSelection(){


	var e = document.getElementById("race");
	var raceSel = e.options[e.selectedIndex].value;
	console.log(raceSel)
		if (raceSel == "dwarf"){
			document.getElementById("dwarf_info").style.display = "block";
				document.getElementById("elf_info", "gnome_info", "halfelf_info", "halforc_info", "halfling_info", "human_info").style.display = "none";
		} else if (raceSel == "elf"){
			document.getElementById("elf_info").style.display = "block";
				document.getElementById("dwarf_info").style.display = "none";
				document.getElementById("gnome_info").style.display = "none";
				document.getElementById("halfelf_info").style.display = "none";
				document.getElementById("halforc_info").style.display = "none";
				document.getElementById("halfling_info").style.display = "none";
				document.getElementById("human_info").style.display = "none";
		} else if (raceSel == "gnome"){
			document.getElementById("gnome_info").style.display = "block";
				document.getElementById("dwarf_info").style.display = "none";
				document.getElementById("elf_info").style.display = "none";
				document.getElementById("halfelf_info").style.display = "none";
				document.getElementById("halforc_info").style.display = "none";
				document.getElementById("halfling_info").style.display = "none";
				document.getElementById("human_info").style.display = "none";
			
		} else if (raceSel == "halfelf"){
			document.getElementById("halfelf_info").style.display = "block";
				document.getElementById("dwarf_info").style.display = "none";
				document.getElementById("elf_info").style.display = "none";
				document.getElementById("gnome_info").style.display = "none";
				document.getElementById("halforc_info").style.display = "none";
				document.getElementById("halfling_info").style.display = "none";
				document.getElementById("human_info").style.display = "none";
		} else if (raceSel == "halforc"){
			document.getElementById("halforc_info").style.display = "block";
				document.getElementById("dwarf_info").style.display = "none";
				document.getElementById("elf_info").style.display = "none";
				document.getElementById("gnome_info").style.display = "none";
				document.getElementById("halfelf_info").style.display = "none";
				document.getElementById("halfling_info").style.display = "none";
				document.getElementById("human_info").style.display = "none";
		} else if (raceSel == "halfling"){
			document.getElementById("halfling_info").style.display = "block";
				document.getElementById("dwarf_info").style.display = "none";
				document.getElementById("elf_info").style.display = "none";
				document.getElementById("gnome_info").style.display = "none";
				document.getElementById("halfelf_info").style.display = "none";
				document.getElementById("halforc_info").style.display = "none";
				document.getElementById("human_info").style.display = "none";
		} else if (raceSel == "human"){
			document.getElementById("human_info").style.display = "block";
				document.getElementById("dwarf_info").style.display = "none";
				document.getElementById("elf_info").style.display = "none";
				document.getElementById("gnome_info").style.display = "none";
				document.getElementById("halfelf_info").style.display = "none";
				document.getElementById("halforc_info").style.display = "none";
				document.getElementById("halfling_info").style.display = "none";
		}
document.getElementById("strVal").innerHTML = str;
document.getElementById("dexVal").innerHTML = dex;
document.getElementById("conVal").innerHTML = con;
document.getElementById("intelVal").innerHTML = intel;
document.getElementById("wisVal").innerHTML = wis;
document.getElementById("chaVal").innerHTML = cha;

document.getElementById("strMod").innerHTML = strMod;
document.getElementById("dexMod").innerHTML = dexMod;
document.getElementById("conMod").innerHTML = conMod;
document.getElementById("intelMod").innerHTML = intelMod;
document.getElementById("wisMod").innerHTML = wisMod;
document.getElementById("chaMod").innerHTML = chaMod;

	
//Need to add racial modifiers to attributes.
	var attBoost = 2;
	var attDet = -2;
	
		if (raceSel == "dwarf"){
			document.getElementById("conVal").innerHTML = (con + attBoost);
				document.getElementById("conMod").innerHTML = (conMod + 1);
			document.getElementById("wisVal").innerHTML = (wis + attBoost);
				document.getElementById("wisMod").innerHTML = (wisMod + 1);
			document.getElementById("chaVal").innerHTML = (cha + attDet);
				document.getElementById("chaMod").innerHTML = (chaMod - 1);
			document.getElementById("human").style.visibility = "hidden";
		} else if (raceSel == "elf"){
			document.getElementById("dexVal").innerHTML = (dex + attBoost);
				document.getElementById("dexMod").innerHTML = (dexMod + 1);
			document.getElementById("intelVal").innerHTML = (intel + attBoost);
				document.getElementById("intelMod").innerHTML = (intelMod + 1);
			document.getElementById("conVal").innerHTML = (con + attDet);
				document.getElementById("conMod").innerHTML = (conMod - 1);
			document.getElementById("human").style.visibility = "hidden";
		} else if (raceSel == "gnome"){
			document.getElementById("conVal").innerHTML = (con + attBoost);
				document.getElementById("conMod").innerHTML = (conMod + 1);
			document.getElementById("chaVal").innerHTML = (cha + attBoost);
				document.getElementById("chaMod").innerHTML = (chaMod + 1);
			document.getElementById("strVal").innerHTML = (str + attDet);
				document.getElementById("strMod").innerHTML = (strMod - 1);
			document.getElementById("human").style.visibility = "hidden";
		} else if (raceSel == "halfling"){
			document.getElementById("dexVal").innerHTML = (dex + attBoost);
				document.getElementById("dexMod").innerHTML = (dexMod + 1);
			document.getElementById("chaVal").innerHTML = (cha + attBoost);
				document.getElementById("chaMod").innerHTML = (chaMod + 1);
			document.getElementById("strVal").innerHTML = (str + attDet);
				document.getElementById("strMod").innerHTML = (strMod - 1);
			document.getElementById("human").style.visibility = "hidden";
		} 
		
		//Handles for human or semi-human race selections
		
		else if (raceSel == "halfelf"){
			document.getElementById("human").style.visibility = "visible";
		} else if (raceSel == "halforc"){
			document.getElementById("human").style.visibility = "visible";
		} else if (raceSel == "human"){
			document.getElementById("human").style.visibility = "visible";
		}
};	
function attSel(){
	var attribute = document.getElementsByName("statSel");
		if (attribute[0].checked){	
			document.getElementById("strVal").innerHTML = (str + 2);
				document.getElementById("strMod").innerHTML = (strMod + 1);
			document.getElementById("dexVal").innerHTML = (dex);
			document.getElementById("dexMod").innerHTML = (dexMod);
			document.getElementById("intelVal").innerHTML = (intel);
			document.getElementById("intelMod").innerHTML = (intelMod);
			document.getElementById("wisVal").innerHTML = (wis);
			document.getElementById("wisMod").innerHTML = (wisMod);
		} else if (attribute[1].checked){
			document.getElementById("dexVal").innerHTML = (dex + 2);
				document.getElementById("dexMod").innerHTML = (dexMod + 1);
			document.getElementById("strVal").innerHTML = (str);
			document.getElementById("strMod").innerHTML = (strMod);
			document.getElementById("intelVal").innerHTML = (intel);
			document.getElementById("intelMod").innerHTML = (intelMod);
			document.getElementById("wisVal").innerHTML = (wis);
			document.getElementById("wisMod").innerHTML = (wisMod);
			
		} else if (attribute[2].checked){
			document.getElementById("intelVal").innerHTML = (intel + 2);
				document.getElementById("intelMod").innerHTML = (intelMod + 1);
			document.getElementById("strVal").innerHTML = (str);
			document.getElementById("strMod").innerHTML = (strMod);
			document.getElementById("dexVal").innerHTML = (dex);
			document.getElementById("dexMod").innerHTML = (dexMod);
			document.getElementById("wisVal").innerHTML = (wis);
			document.getElementById("wisMod").innerHTML = (wisMod);
		} else if (attribute[3].checked){
			document.getElementById("wisVal").innerHTML = (wis + 2);
				document.getElementById("wisMod").innerHTML = (wisMod + 1);
			document.getElementById("strVal").innerHTML = (str);
			document.getElementById("strMod").innerHTML = (strMod);
			document.getElementById("dexVal").innerHTML = (dex);
			document.getElementById("dexMod").innerHTML = (dexMod);
			document.getElementById("intelVal").innerHTML = (intel);
			document.getElementById("intelMod").innerHTML = (intelMod);
		}
};
function classSelection(){
	var e = document.getElementById("class");
	var classSel = e.options[e.selectedIndex].value;
	
	switch(classSel){
		case "fighter":
			alert("Your primary attribute will be either Strength or Dexterity.");
			break;
		case "cleric":
			alert("Your primary attribute will be Wisdom.");
			break;
		case "Wizard":
			alert("Your primary attribute will be Intelligence.");
			break;
		case "rogue":
			alert("Your primary attribute will be Dexterity.");
			break;
		default:
			alert("Something went wrong");
			break;
	}
}	
function lvlTblShow(){
	document.getElementById("hiddenTbl").style.display = "block";
};
function lvlTblHide(){
	document.getElementById("hiddenTbl").style.display = "none";
};

=======
var race = ["dwarf", "elf", "gnome", "halfelf", "halforc", "halfling", "human"];

function raceSelection(){
	var e = document.getElementById("race");
	var raceSel = e.options[e.selectedIndex].value;
	console.log(raceSel);	
	
	
};




