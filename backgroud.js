var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var head = document.querySelectorAll(".maindiv div");
var hai = document.querySelector('.righthand');
var bhead = document.querySelector(".headdiv2");
var horn = document.querySelector(".lefthorn2");
var horn2 = document.querySelector(".righthorn2");
var eye = document.querySelector(".righteye2");
var eye2 = document.querySelector(".lefteye2")
var body = document.querySelector(".bodydiv2");
var leg = document.querySelector(".leftleg2");
var leg2 = document.querySelector(".rightleg2");
var hand = document.querySelector(".lefthand2");
var hand2 = document.querySelector(".righthand2");



function setColor() {

	for (var i = 0; i < head.length; i++) {

		head[i].style.backgroundImage = 
		"linear-gradient(to right, " 
			+ color1.value 
			+ ", " 
			+ color2.value 
			+ ")";}}

function sayHai() {
	
	hai.style.border= "1px solid #007500";
 	hai.style.height= "130px";
	hai.style.width= "30px";
	hai.style.backgroundColor=" #007500";
	hai.style.borderTopRightRadius= "-50px";
	hai.style.borderRadius= "50px";
	hai.style.marginLeft="400px";
	hai.style.marginTop= "-132px";
	hai.style.transform= "rotate(-150deg)";
	}
function getBrother() {
	// function bhead() {
	bhead.style.marginTop=" 50px";
	bhead.style.marginLeft= "160px";
	bhead.style.width= "150px";
	bhead.style.height= "100px";
	bhead.style.border="1px solid #007500";
	bhead.style.backgroundColor= "#007500";
	bhead.style.borderTopRightRadius= "100px";
	bhead.style.borderTopLeftRadius= "100px";
// lefthorn code
	horn.style.border= "1px solid #007500";
	horn.style.height= "80px";
	horn.style.width=" 5px";
	horn.style.backgroundColor=" #007500";
	horn.style.borderTopRightRadius= "-50px";
	horn.style.borderRadius= "50px";
	horn.style.marginLeft= "150px";
	horn.style.marginTop= "-100px";
	horn.style.transform= "rotate(-25deg)";
// Right Horn
	horn2.style.border="1px solid #007500";
	horn2.style.height=" 80px";
	horn2.style.width=" 5px";
	horn2.style.backgroundColor=" #007500";
	horn2.style.borderTopRightRadius=" -50px";
	horn2.style.borderRadius= "50px";
	horn2.style.marginLeft= "310px";
	horn2.style.marginTop= "-90px";
	horn2.style.transform= "rotate(25deg)";
// Left Eye
	eye2.style.marginTop= "-50px";
	eye2.style.marginLeft= "180px";
	eye2.style.width= "10px";
	eye2.style.height=" 10px";
	eye2.style.backgroundColor="white";
	eye2.style.border="1px solid black";
	eye2.style.borderRadius= "100px";
// Right Eye
	eye.style.marginTop= "-9px";
	eye.style.marginLeft= "270px";
	eye.style.width= "10px";
	eye.style.height= "10px";
	eye.style.backgroundColor= "white";
	eye.style.border="1px solid black";
	eye.style.borderRadius= "100px";
// body
	body.style.marginTop= "70px";
	body.style.marginLeft= "160px";
	body.style.width= "150px";
	body.style.height= "100px";
	body.style.backgroundColor= "#007500";
	body.style.border="1px solid #007500";
	body.style.borderBottomLeftRadius= "30px";
	body.style.borderBottomRightRadius= "30px";
// left leg
	leg.style.border=" 1px solid #007500";
	leg.style.height= "90px";
	leg.style.width= "20px";
	leg.style.backgroundColor= "#007500";
	leg.style.borderRadius= "50px";
	leg.style.marginLeft= "200px";
	leg.style.marginTop= "-30px";
// right leg
	leg2.style.border= "1px solid #007500";
	leg2.style.height= "160px";
	leg2.style.width= "20px";
	leg2.style.backgroundColor= "#007500";
	leg2.style.borderRadius= "50px";
	leg2.style.marginLeft= "250px";
	leg2.style.marginTop= "-160px";
// left hand
	hand.style.border= "1px solid #007500";
	hand.style.height= "80px";
	hand.style.width= "15px";
	hand.style.backgroundColor= "#007500";
	hand.style.borderTopRightRadius= "-50px";
	hand.style.borderRadius= "50px";
	hand.style.marginLeft="135px";
	hand.style.marginTop= "-160px";
// Right hand
	hand2.style.border= "1px solid #007500";
	hand2.style.height= "80px";
	hand2.style.width= "15px";
	hand2.style.backgroundColor=" #007500";
	hand2.style.borderTopRightRadius= "-50px";
	hand2.style.borderRadius= "50px";
	hand2.style.marginLeft="320px";
	hand2.style.marginTop= "-80px";




}











// color1.addEventListener("input", setColor);

// color2.addEventListener("input", setColor);