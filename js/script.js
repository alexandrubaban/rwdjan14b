// CSS for when JavaScript is Enabled
document.documentElement.className = "js";

// show, hide navigation when JavaScript is Enabled
function toggleNav() {
	var theNav = document.getElementById("navlist");
	if ((theNav.style.display === "none") || (theNav.style.display == "")) {
		theNav.style.display = "block";
	} else {
		theNav.style.display = "none";
	}		
}

