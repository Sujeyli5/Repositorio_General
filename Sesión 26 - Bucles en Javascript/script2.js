var frase = "eso bebe a locate, sin limitres tu tranqui y a locate5";
var expreg = /locate[0-9]/
var index = frase.search(expreg);

document.getElementById("demo").innerHTML = index;