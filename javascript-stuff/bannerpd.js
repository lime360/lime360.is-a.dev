<!--
// bannerpd.js v1.4 (html4 compliant,optimized,css) 980910 abk
// 980901 a name for bot top hdline link used for posit top
// added check for its existence
// 980910 - changed to use .headlines style sheet
NS4=(document.layers);IE4=(document.all);
isMac=(navigator.appVersion.indexOf("Mac")!=-1);
if(NS4||(IE4&&!isMac)){
finite=(maxLoops>0);
var styleObj=(IE4)?".style":"";
function getPH(phname){
pHA="";
for(i=0;i<document.anchors.length;i++){
theA=document.anchors[i];
if(theA.name==phname){pHA=theA;break}
}
return pHA //placeholding A
}
function getReal(xy){
if(IE4){
Pos=(xy=="x")?this.offsetLeft:this.offsetTop;
tmpEl=this.offsetParent;
while(tmpEl!=null){
Pos+=(xy=="x")?tmpEl.offsetLeft:tmpEl.offsetTop;
tmpEl=tmpEl.offsetParent;
}
}else{
Pos=eval("this."+xy);
}
return Pos;
}
pHT=(NS4)?getPH("ph1"):document.all.ph1;
if(pHT){
pHT.getReal=getReal;
var bnrLft=pHT.getReal("x")-1,bnrTop=pHT.getReal("y");
pHB=(NS4)?getPH("phb"):document.all.phb;
if(pHB){
pHB.getReal=getReal;
var bnrRit=pHB.getReal("x"),bnrBot=pHB.getReal("y");
var bnrWid=bnrRit-bnrLft,bnrHit=bnrBot-bnrTop;
function getObj(i){obj=eval("msg"+i+styleObj);return obj}
onload=startBnr;
function showMsg(n,show){
var theEl=getObj(n);theEl.visibility=(show)?"visible":"hidden";
}
function nextMsg(){
var fm=current;current=(fm==ar.length-1)?0:fm+1;
if(current==1)loopCount++;
if(finite&&(loopCount>=maxLoops))return;
scrollBnr(fm,current);
}
function moveUp(){
if(NS4){
fmEl.top-=increment;
if(toEl.top-increment<=toElTarget){
toEl.top=toElTarget;clearInterval(intervalID);fmEl.visibility="hidden";
timeoutID=setTimeout("nextMsg()",pause);
}else{
toEl.top-=increment;
}
}else{
fmEl.pixelTop-=increment;
if(toEl.pixelTop-increment<=toElTarget){
toEl.pixelTop=toElTarget;clearInterval(intervalID);fmEl.visibility="hidden";
timeoutID=setTimeout("nextMsg()",pause);
}else{
toEl.pixelTop-=increment;
}}}
function scrollBnr(fm,to){
fmEl=getObj(fm);toEl=getObj(to);
if(NS4){
toEl.top=fmEl.top+bnrHit;toElTarget=fmEl.top;
}else{
toEl.pixelTop=fmEl.pixelTop+bnrHit;toElTarget=fmEl.pixelTop;
}
showMsg(to,true);
intervalID=setInterval("moveUp()",interval);
}
function moveTo(lPos,tPos){this.style.pixelLeft=lPos;this.style.pixelTop=tPos;}
function makeIE(){
var text='<DIV ID="bnr" STYLE="position:absolute">';
for(var i=ar.length-1;i>=0;i--){
text+='<DIV ID="msg'+i+'" STYLE="position:absolute"><\/DIV>';
}
text+='<\/DIV>';
document.body.insertAdjacentHTML("BeforeEnd",text);
with(bnr.style){
width=bnrWid;height=bnrHit;clip="rect(0 "+bnrWid+" "+bnrHit+" 0)";
backgroundColor=bannerColor;
}
bnr.moveTo=moveTo;bnr.moveTo(bnrLft,bnrTop)
for(i=0;i<ar.length;i++){
with(eval("msg"+i+".style")){
visibility="hidden";width=bnrWid-leftPadding;backgroundColor=bannerColor;
}
eval("msg"+i+".moveTo=moveTo");
eval("msg"+i+".moveTo(leftPadding,topPadding)");
}
}
function makeNS(){
bnr=new Layer(bnrWid);
with(bnr){
clip.right=bnrWid;clip.bottom=bnrHit;bgColor=bannerColor;
moveTo(bnrLft,bnrTop);visibility="show";
}
for(var i=0;i<ar.length;i++){
eval("msg"+i+"="+"new Layer(bnrWid-leftPadding, bnr)");
with(eval("msg"+i)) {
moveTo(leftPadding,topPadding);bgColor=bannerColor;
}}}
function fillBnr(){
var theEl;
for(i=0;i<ar.length;i++){
theEl=eval("msg"+i);
newsStr="<A " +target+classid+
" HREF="+ar[newsCount][0]+">"+ar[newsCount][1]+"<\/A>";
if(NS4){
with(theEl.document){write(newsStr);close();}
}else{theEl.innerHTML=newsStr;}
newsCount++;if(newsCount==ar.length)newsCount=0;
}}
function startBnr(){
ar=new Array();
if(!window.arURL)return;if(arURL.length==0)return;
if(arURL.length<numheadlines)numheadlines=arURL.length; 
for(i=0;i<numheadlines;i++){ar[i]=new Array(prefix+arURL[i],arTXT[i]);}
newsCount=0;if(finite)loopCount=0;
(NS4)?makeNS():makeIE();
fillBnr();showMsg(0,true);current=0;
window.onresize=reDo;timeoutID=setTimeout("nextMsg()",pause);
}
function reDo(){window.location.reload();}
}}}
//-->
