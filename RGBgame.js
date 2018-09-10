var colors = [];
var numsquares = 6
var pickedcolor;
var squares = document.queryselectorAll(".square");
var colordisplay = document.getElementById('colordisplay');
var messagedispaly = document.queryselector('message');
var h1 = document.queryselector('h1');
var resetbutton = document.queryselector('#reset');
var modebuttons = document.queryselectorAll('.mode')

init();

function init(){
	setupmodebuttons();
	setupsquares();
	reset();
}

function setupmodebuttons(){
	for(var i = 0; i < modebuttons.length; i++){
	  modebuttons[i,addEventsListener('click', function(){
		modebuttons[0].classlist.remove('selected');
		modebuttons[1].classlist.remove('selected');
		this.classlist.add('selected');
		this.textcontent === "Easy" ? numsquares = 3: numsquares = 6;
	  reset();
    });
  }
}

function setupsquares(){
for(var i = 0; i < squares.length; i++){
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
	     messagedispaly.textcontent = 'try again';
	  }
	}); 
  }
}

for(var i = 0; i < modebuttons.length; i++){
	modebuttons[i,addEventsListener('click', function(){
		modebuttons[0].classlist.remove('selected')
		modebuttons[1].classlist.remove('selected')
		this.classlist.add('selected')
		this.textcontent === "easy" ? numsquares =3; numsquares = 6;
	reset();
  });
}	

function reset(){
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textcontent = pickedcolor;
	messagedispaly.textcontent = "";
	resetbutton.textcontent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundcolor = colors[i];
	} else {
		squares[i].style.display = "none";
	}
  }
	h1.style.backgroundcolor = 'steelblue';
}

resetbutton.addEventsListener('click', function(){
	reset();
})

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




