arImageSrc = new Array ("../img/resizable-viewer/loading.gif","../img/resizable-viewer/loaded.gif");
arImageList = new Array ();
for (counter in arImageSrc) {
arImageList[counter] = new Image();
arImageList[counter].src = arImageSrc[counter];
}
var height = screen.height;
var width = screen.width;
var leftpos = width / 2 - 50;
var toppos = height / 2 - 50; 
function encode(str){ // Netscape fix thanks to Cyanide_7
return escape(str.replace(/ /g,'+'));
}
function view(what) {
var url = 'resizable-viewer-show.html?pic='+encode(what);
window.open(url,'WIN','scrollbars=no,status=no,toolbar=no,resizable=1,location=no,menu=no,width=100,height=100,left=' + leftpos + ',top=' + toppos);
}
function getParams() {
var idx = document.URL.indexOf('?');
var params = new Array();
if (idx != -1) {
var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
for (var i=0; i<pairs.length; i++) {
nameVal = pairs[i].split('=');
params[nameVal[0]] = nameVal[1];
   }
}
return params;
}
params = getParams();
function resize() {
if (eval(pic).height) {
var name = navigator.appName
if (name == "Microsoft Internet Explorer") {
myHeight = eval(pic).height + 40;
myWidth = eval(pic).width + 12;
}
else {
myHeight = eval(pic).height + 9;
myWidth = eval(pic).width;
}
clearTimeout();
var height = screen.height;
var width = screen.width;
var leftpos = width / 2 - myWidth / 2;
var toppos = height / 2 - myHeight / 2; 
self.moveTo(leftpos, toppos);
self.resizeTo(myWidth, myHeight);
document.il.src = '../img/resizable-viewer/loaded.gif';
}
else setTimeOut(resize(), 100);
}