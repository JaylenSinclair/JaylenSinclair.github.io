
var element1 = document.querySelector('h1.first');
element1.innerHTML = "<b><i> Bold and italicized </b> </i>";

var element2 = document.getElementsByTagName("li");
element2[1].parentNode.setAttribute("class", "first");

var newElement = document.createElement("li");
var newText = document.createTextNode("any brief text");
newElement.appendChild(newText);
element2[1].parentNode.appendChild(newElement);
