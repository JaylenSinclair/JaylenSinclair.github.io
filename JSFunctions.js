
function math (x,y) {
  var product = x * y;
  var sum = x + y;
  var difference = x - y;
  var quotient = x  / y;
  var myCalc = [product, sum, difference, quotient]
  return myCalc;
}

var a = Math.round(Math.random()* 6);
var b = Math.round(Math.random()* 6);

var el = document.getElementById("first");
el.textContent = math(a, b) [1]

var el2 = document.getElementById("second");
el2.textContent = math(a, b)[0];

var el3 = document.getElementById("third");
el3.textContent = math(a, b)[2];

var el4 = document.getElementById("fourth");
el4.textContent = math(a, b)[3]
