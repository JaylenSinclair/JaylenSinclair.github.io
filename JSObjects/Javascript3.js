
function Construction(hm, vis) {
	this.home = hm;
	this.visitor = vis;
	this.hmScore = Math.round(Math.random()* 20) + 70;
	this.visScore = Math.round(Math.random()* 20) + 70;
	this.getSummary = function() {
		return [this.home, this.hmScore, this.visitor, this.visScore];
	}
}
var games = new Array();
games[0] = new Construction("Heat", "Cavs");
games[1] = new Construction("Warriors", "Lakers");
games[2] = new Construction("Knicks", "Nets");
games[3] = new Construction("Mavs", "Rockets");
games[4] = new Construction("Suns", "Trailblazers");
games[5] = new Construction("Wizards", "Grizzlies");

var el1 = document.getElementById("first");
el1.textContent = games[0].getSummary();

//---------------------------------------------------------------------------

var el2 = document.getElementById("second");
el2.textContent = games[1].getSummary();

//---------------------------------------------------------------------------

var el3 = document.getElementById("third");
el3.textContent = games[2].getSummary();

//----------------------------------------------------------------------------

var el4 = document.getElementById("fourth");
el4.textContent = games[3].getSummary();

//-----------------------------------------------------
var el5 = document.getElementById("fifth");
el5.textContent = games[4].getSummary();

//-----------------------------------------------------
var el6 = document.getElementById("sixth");
el6.textContent = games[5].getSummary();
