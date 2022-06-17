
var today = new Date();
	
var dt = today.getDate();
var dy = today.getDay();

var year = today.getFullYear();
var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var monthlen = new Array(31,checkLeapYear(year),31,30,31,30,31,31,30,31,30,31);
var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

var child = "";

function checkLeapYear(theyear) {
	// 1.Years divisible by four are leap years, unless...
	// 2.Years also divisible by 100 are not leap years, except...
	// 3.Years divisible by 400 are leap years.

	if ( ((theyear % 4 == 0) && (theyear % 100 != 0)) || (theyear % 400 == 0) ) {
		return("29");
	} else {
		return("28");
	}
}


function open_window(url,width, height, resize, scroll) {
	child = window.open(url,"newwindow", "width=" + width + ",height=" + height + ",resizable=" + resize + ",scrollbars=" + scroll + "");
}
