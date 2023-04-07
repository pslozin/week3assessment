console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	alert("SUBMIT")
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function nicePic()
{
	alert("NiCe Picture")
}

let niceP = document.querySelector('img')
niceP.addEventListener('mouseover', nicePic)
