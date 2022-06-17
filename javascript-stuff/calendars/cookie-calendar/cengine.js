//Get Cookie Function
function getCookie(name) {
	var cname = name + "=";
	var dc = document.cookie;
	
	if (dc.length > 0) {
		begin = dc.indexOf(cname);
		if (begin != -1) {
			begin += cname.length;
			end = dc.indexOf(";", begin);
			if (end == -1) end = dc.length;
				return unescape(dc.substring(begin, end));
		}
	}
	return null;
}

//Set Cookie Function
function setCookie(name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape(value) + 
	((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
	((path == null) ? "" : "; path=" + path) +
	((domain == null) ? "" : "; domain=" + domain) +
	((secure == null) ? "" : "; secure");
}

//Delete Cookie Function
function delCookie (name,path,domain) {
	if (getCookie(name)) {
		document.cookie = name + "=" +
		((path == null) ? "" : "; path=" + path) +
		((domain == null) ? "" : "; domain=" + domain) +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

//Get Advertisement from Array Function
function getAdv(name) {
	var adv = "";
	
	for(var i = 0;i < seglist.length ;i+=3) {
		if(name == seglist[i]) {
			adv = seglist[i + 2];
			
			return adv;
		}
	}
	
	return null;
}