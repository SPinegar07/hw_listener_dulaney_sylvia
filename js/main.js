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
	myElement.innerHTML = 'This is click number ' + x;
	document.getElementById( 'topHeading').appendChild( myElement );
};
heading.addEventListener( 'click', clickCounter );

//function stopDefAction(evt) {
//    evt.preventDefault();
//}
    
//document.getElementById('submitbtn').addEventListener(
//    'click', stopDefAction, false
//);

var formLogFirstName = document.getElementById('firstname');

document.querySelector('form.formMain').addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(formLogFirstName.value);    
});

var formLogLastName = document.getElementById('lastname');

document.querySelector('form.formMain').addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(formLogLastName.value);    
});

var formLogEmail = document.getElementById('email');

document.querySelector('form.formMain').addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(formLogEmail.value);    
});

var formLogMessage = document.getElementById('message');

document.querySelector('form.formMain').addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(formLogMessage.value);    
});

// Change button color, listens for click, changes the background color of a button

document.getElementById("myBtn").addEventListener("click", function(){
    this.style.backgroundColor = "#C8ADFF";
});

// Listens for mouse over the table to change the text from wipe on to wipe off
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "Wipe Off") {
    t2.firstChild.nodeValue = "Wipe On";
  } else {
    t2.firstChild.nodeValue = "Wipe Off";
  }
}
var el = document.getElementById("mouseover");
el.addEventListener("mouseover", modifyText, false);

//listens for double click and logs the time
document.getElementById("myBtn2").addEventListener("dblclick", displayDate);

function displayDate() {
    document.getElementById("demo2").innerHTML = Date();
}