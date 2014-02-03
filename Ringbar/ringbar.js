(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();


var start = 0;
var c;
var ctx;
var d = document.getElementById("SomeElementYouWantToAnimate");

function step() {
	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(135,100);
	ctx.fillStyle = "#882266";
  	ctx.arc(100,100,70,0,start*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.arc(100,100,40,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	if(start > 1.5) return;
	start = start + 0.1;
	
    requestAnimationFrame(step);
  }


requestAnimationFrame(step);


window.onload = function(){
	c=document.getElementById("chart");
	ctx=c.getContext("2d");
	ctx.fillStyle = "#999";
	
	ctx.arc(100,100,70,0,2*Math.PI);
	ctx.fill();
	
}

