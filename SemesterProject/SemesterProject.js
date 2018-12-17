function postulate1(e) {
post1.textContent = "Through any two points, there is exactly one line.";
var post1img = document.createElement('img');
post1img.setAttribute("src", "twopoints.png");
post1img.setAttribute("height", "160px");
post1img.setAttribute("width", "160px")
document.getElementById("one").appendChild(post1img);
}

var post1 = document.getElementById("one");
document.getElementById("one").addEventListener('mouseover', postulate1, false);


///////////////////2//////////////////////////////////////////////////////////
function postulate2(e) {
post2.textContent = "If X is a point on AB and A-X-B (X is between A and B),then AX + XB = AB.";
var post2img = document.createElement('img');
post2img.setAttribute("src", "abbcac.png");
post2img.setAttribute("height", "75px")
document.getElementById("two").appendChild(post2img);
}

var post2 = document.getElementById("two");
document.getElementById("two").addEventListener('mouseenter', postulate2, false);
/////////////////////3////////////////////////////////////////////////////////

function postulate3(e) {
post3.textContent = " Through any three noncollinear points, there is exactly one plane.";
var post3img = document.createElement('img');
post3img.setAttribute("src", "threepoints.png");
post3img.setAttribute("height", "75px")
document.getElementById("three").appendChild(post3img);
}

var post3 = document.getElementById("three");
document.getElementById("three").addEventListener('mouseenter', postulate3, false);

/////////////////////4////////////////////////////////////////////////////////

function postulate4(e) {
post4.textContent = "If two lines intersect, then they intersect in exactly one point.";
var post4img = document.createElement('img');
post4img.setAttribute("src", "intersect.png");
post4img.setAttribute("height", "100px")
post4img.setAttribute("width", "250px")
document.getElementById("four").appendChild(post4img);
}

var post4 = document.getElementById("four");
document.getElementById("four").addEventListener('mouseenter', postulate4, false);
