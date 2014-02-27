// CSS for when JavaScript is Enabled
document.documentElement.className = "js";


// add, remove events
var eventUtility = {
    addEvent : (function() {
        if (typeof addEventListener !== "undefined") {
            return function(obj, evt, fn) {
                obj.addEventListener(evt, fn, false);
            };
        } else {
            return function(obj, evt, fn) {
                obj.attachEvent("on" + evt, fn);
            };
        }
    }()),
    removeEvent : (function() {
        if (typeof removeEventListener !== "undefined") {
            return function(obj, evt, fn) {
                obj.removeEventListener(evt, fn, false);
            };
        } else {
            return function(obj, evt, fn) {
                obj.detachEvent("on" + evt, fn);
            };
        }
    }())
};


// watch for click event on menu toggle img
eventUtility.addEvent(
	document.getElementById('m'), 'click', function() {
		toggleNav();
	}
);


// show, hide navigation 
function toggleNav() {
	var theNav = document.getElementById("navfull");
	if ((theNav.style.display === "none") || (theNav.style.display == "")) {
		theNav.style.display = "block";
	} else {
		theNav.style.display = "none";
	}		
}
