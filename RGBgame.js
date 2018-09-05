var colors = generaterandomcolors(6);
var squares = document.queryselectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById('colordisplay');
var messagedispaly = document.queryselector('message');
var h1 = document.queryselector('h1');
var resetbutton = document.queryselector('#reset');

resetbutton.addEventsListener('click', function(){
	colors = generaterandomcolors(6);
	pickedcolor = pickcolor();
	colordisplay.textcontent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundcolor = colors[i];
	}
	h1.style.backgroundcolor = '#232323'
})



colordisplay.textcontent = pickedcolor;


for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundcolor = colors[i]
    //add click listeners to squares
	squrares[i].addEventsListener('click', function(){
	//grab color of clicked square
	var clickedcolor = this.style.backgroundcolor;
	consol.log(clickedcolor, pickedcolor);
	//compare color to picked color
	if(clickedcolor === pickedcolor){
		messagedispaly.textcontent = 'correct';
		resetbutton.textcontent = "play again?";
		changecolors(clickedcolor);
		h1.style.backgroundcolor = clickedcolor;
	}	else{ 
	     this.style.backgroundcolor = 232323;
	     messagedispaly.textcontent = 'try again'
	 }
	});
}

function changecolors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundcolor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num) {
	var arr = []
	for(var i=0; i < num; i++){
		arr.push(randomcolor())
	}
	return arr;
}

function randomcolor(){
var r = Math.floor(Math.random () * 256)
var g = Math.floor(Math.random () * 256)
var b = Math.floor(Math.random () * 256)
return 'rgb(' + r + ', ' + g +', ' + b +')';
}




