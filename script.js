var loadingFunction = function() {
console.log("JavaScript is alive");

var bod = document.querySelector("body");


function randomNum()
{
return Math.floor(Math.random() * 255);
}

function changeColor() {
  InterId = setInterval(flashDiv, 3000);
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