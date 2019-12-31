var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var head = document.getElementById("head1")
var head2 = document.getElementById("head2");


function setColor() {

	  head.style.background = "linear-gradient(to top right, "  
	
	+ color1.value 
	+ ", " 
	+ color2.value + 
	")";
	
	 head2.style.background = "linear-gradient(to right, "  
	+ color1.value 
	+ ", " 
	+ color2.value + 
	")";
}


color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);


