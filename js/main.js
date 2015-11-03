var click = 0;

function countClick(){
	click++;
}

function modifyHTML()	{
	var click = document.getElementByID('countClick');
	heading.innerHTML = "This is click number' + 'countClick"
}