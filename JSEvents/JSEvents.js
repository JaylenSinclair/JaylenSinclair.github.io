function mouseX(e) {
elementX.textContent = "X coordinate: " + e.clientX;

}

var elementX = document.getElementById("Xcor");
document.addEventListener('mousemove', mouseX, false);


/*-------------------------------------------------------------*/

function mouseY(e) {
elementY.textContent = "Y coordinate: " + e.clientY;

}

var elementY = document.getElementById("Ycor");
document.addEventListener('mousemove', mouseY, false);


//////////////////////////////////////////////////////////////////


function zeroX(e) {
  elementE = e.keyCode;
  if (elementE == 67)
  elementX.textContent = "0";
}

elementX = document.getElementById("Xcor");
document.addEventListener('keydown', zeroX, false);

/*-------------------------------------------------------------*/
function zeroY(e) {
  elementE = e.keyCode;
  if (elementE == 67)
  elementY.textContent = "0";
}


elementY = document.getElementById("Ycor");
document.addEventListener('keydown', zeroY, false);
