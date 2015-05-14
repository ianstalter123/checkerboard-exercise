var loadingFunction = function() {
console.log("JavaScript is alive");

// var container = document.createElement("section");
// var square = document.createElement("div");
// var section = document.createElement("div");





var bod = document.querySelector("body");
// var div = document.querySelector("div");
// bod.appendChild(square);
// section.appendChild(square);
var x = 10;
var y = 10;
for (var i =0 ; i<9; i++)
{
	for (var j = 0; j < 8; j++)
	{

		
if( j % 2 === 0)
{
			var rando1 = Math.floor( 0 + x );
			var rando2 = Math.floor( 0 + x  );
			var rando3 = Math.floor(155);

		var square = document.createElement("div");
		square.style.width = "11%";
		square.style.height = "100px";
		square.style.background = "rgb("+ rando1 + "," + rando2 + "," + rando3 + ")";
		square.style.float = "left";
		document.body.appendChild(square);
		x+=5;
	}
else
	{

		var rando1 = Math.floor(0 + y );
			var rando2 = Math.floor(0 + y  );
			var rando3 = Math.floor(200);
		var square = document.createElement("div");
		square.style.width = "11%";
		square.style.height = "100px";
		square.style.background = "rgb("+ rando1 + "," + rando2 + "," + rando3 + ")";
		square.style.float = "left";
		document.body.appendChild(square);
		console.log('hello');
		y+=5;
	}
		
	
	} 
}

}

document.addEventListener("DOMContentLoaded", loadingFunction);