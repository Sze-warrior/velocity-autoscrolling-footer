window.Velocity = window.Velocity || (window.jQuery || window.Zepto || window).Velocity;

var btnTop = document.querySelector(".btn-top-footer");
var header = document.getElementById("top");

function scrollTop(){
	Velocity(header, "scroll", {duration:300}, "ease-in-out");
	//Velocity(header, "reverse", {duration:300, delay: 100});
}	

btnTop.addEventListener("click", scrollTop, false);