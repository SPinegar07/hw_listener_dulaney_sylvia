//var heading = document.getElementById( 'topHeading' );
//var numClicks = 0;

//heading.addEventListener( 'click', function buttonClick ()	{
//	numClicks = numClicks +1;


var x = 0;
var heading = document.getElementById( 'topHeading')

function clickCounter()	{
	x = x+1;
//	document.getElementById("p1").innerHTML = x;
	var myElement = document.createElement( 'p');
	myElement.innerHTML = '<p>This is click number ' + x + '</p>';
	document.getElementById( 'topHeading').appendChild( myElement );
};
heading.addEventListener( 'click', clickCounter );