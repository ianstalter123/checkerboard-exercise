var loadingFunction = function() {
console.log("JavaScript is alive");

// var container = document.createElement("section");
// var square = document.createElement("div");
// var section = document.createElement("div");





var bod = document.querySelector("body");
// var div = document.querySelector("div");
// bod.appendChild(square);
// section.appendChild(square);

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

}

document.addEventListener("DOMContentLoaded", loadingFunction);