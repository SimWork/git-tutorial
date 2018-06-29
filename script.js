var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("BUTTON");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandCol() {
	// random code taken from 
	// https://css-tricks.com/snippets/javascript/random-hex-color/
	// Comment by Eliazer
	color1.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16); 
	color2.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
	setGradient(); 
}

setGradient(); // Sets on page load and writes out css code to page
// Would have made a separate function, but it would be the same exact code 
// So I was like, ceebs doing that, less code the better. 

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandCol);
