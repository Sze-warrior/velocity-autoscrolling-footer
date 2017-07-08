window.Velocity = window.Velocity || (window.jQuery || window.Zepto || window).Velocity;

var btnTop = document.querySelector(".btn-top-footer");
var header = document.getElementById("top");

function scrollTop(){
	Velocity(header, "scroll", {duration:1000, easing:"easeInOut"});
};	

btnTop.addEventListener("click", scrollTop, false);