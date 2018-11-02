var options = ["red", "blue", "green", "yellow", "orange", "purple"]

var a = Math.floor(Math.random()* 6);


var el = document.getElementById("first");
el.textContent = options[a];
a = Math.floor(Math.random()* 6);

var el2 = document.getElementById("second");
el2.textContent= options[a];
a = Math.floor(Math.random()* 6);

var el3 = document.getElementById("third");
el3.textContent = options[a];
a = Math.floor(Math.random()* 6);
var el4 = document.getElementById("fourth");
el4.textContent = options[a];
