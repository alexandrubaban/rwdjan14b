document.documentElement.className = "js";

function toggleNav() {
	var theNav = document.getElementById("navlist");
	if ((theNav.style.display === "none") || (theNav.style.display == "")) {
		theNav.style.display = "block";
	} else {
		theNav.style.display = "none";
	}		
}

