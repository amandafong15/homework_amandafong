document.getElementById('adeleButton').onclick = adeleAction;
document.getElementById('beyonceButton').onclick = beyonceAction;
document.getElementById('drakeButton').onclick = drakeAction;
document.getElementById('rihannaButton').onclick = rihannaAction;

function adeleAction() {
	off ();
	document.getElementById("myImg").src = "./images/e84712bc484e5160_adele.jpg";
	document.getElementById("adelebio").innerHTML = "Adele is one of the UK’s best-selling singer/songwriters and having taken some time away from the music industry after the birth of her first child, Angelo, she is now working on her third album. But where did it all start?";
}

function beyonceAction() {
	document.getElementById("myImg").src = "./images/beyonce_publicityphoto6.jpg";
	document.getElementById("beyoncebio").innerHTML = "Beyoncé Knowles is recognized as a soul/pop vocalist, trendsetting music video performer, multiple Grammy Award winner and film star."
}

function drakeAction() {
	document.getElementById("myImg").src = "./images/drake.jpg";
	document.getElementById("drakebio").innerHTML = "TV and rap star Drake is best known in Canada for playing wheelchair-bound Jimmy Brooks on Degrassi."
}

function rihannaAction() {
	document.getElementById("myImg").src = "./images/42a53c60a1d399ca_rihanna.jpg";
}

function off () {
	document.getElementById("beyoncebio").innerHTML = ""
	document.getElementById("drakebio").innerHTML = ""
	document.getElementById("adelebio").innerHTML = ""


}