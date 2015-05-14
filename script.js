var loadingFunction = function() {
console.log("JavaScript is alive");

// var container = document.createElement("section");
// var square = document.createElement("div");
// var section = document.createElement("div");





var bod = document.querySelector("body");
// var div = document.querySelector("div");
// bod.appendChild(square);
// section.appendChild(square);

function randomNum()
{
return Math.floor(Math.random() * 255);
}

function changeColor() {
  nIntervId = setInterval(flashDiv, 500);
}

function flashDiv() {
	
  var oElem = document.querySelectorAll("div"); 
  for(var l = 0; l < oElem.length; l++)
  {
  	oElem[l].style.background = "rgb("+ randomNum() + "," + randomNum() + "," + randomNum() + ")";
  }
  
}

for (var i =0 ; i<9; i++)
{
	for (var j = 0; j < 8; j++)
	{


		
			var rando1 = Math.floor(Math.random() * 255);
			var rando2 = Math.floor(Math.random() * 255);
			var rando3 = Math.floor(Math.random() * 255);

		var square = document.createElement("div");
		square.style.width = "11%";
		square.style.height = "100px";
		square.style.background = "rgb("+ rando1 + "," + rando2 + "," + rando3 + ")";
		square.style.float = "left";
		document.body.appendChild(square);
		
	
	} 
}
changeColor();
}

document.addEventListener("DOMContentLoaded", loadingFunction);