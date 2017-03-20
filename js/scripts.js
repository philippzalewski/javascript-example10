// plik scripts.js

var withButtonClass = document.getElementsByClassName('button');

var q = withButtonClass.length;

function rewriteButton(text) {
	alert(text);
}

for (var a = 0; q > a; a++) {
	rewriteButton(withButtonClass[a].innerText)
}
