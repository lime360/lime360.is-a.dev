var delay = 9000; //set delay between message change (in miliseconds)

var maxsteps=30; // number of steps to take to change from start color to endcolor

var stepdelay=40; // time in miliseconds of a single step

//**Note: maxsteps*stepdelay will be total time in miliseconds of fading effect

var startcolor= new Array(0,217,54); // start color (red, green, blue)

var endcolor=new Array(159,242,4); // end color (red, green, blue)


var fcontentl=new Array();

begintag='<div style="padding: 1px;">'; //set opening tag, such as font declarations





fcontentl[3]="The Matrix Extreme FPS Clan, coming soon!";

fcontentl[4]="Interested? Contact Deadstick for more information.";

fcontentl[5]="The Next Level In Online Gaming!";





closetag='</div>';



var fwidthl='118px'; //set scroller width

var fheightl='84px'; //set scroller height



var fadelinks=1;  //should links inside scroller content also fade like text? 0 for no, 1 for yes.



///No need to edit below this line/////////////////





var ie4=document.all&&!document.getElementById;

var DOM2=document.getElementById;

var faderdelay=0;

var index=0;





/*Rafael Raposo edited function*/

//function to change content

function changecontent(){

  if (index>=fcontentl.length)

    index=0

  if (DOM2){

    document.getElementById("fscrollerl").style.color="rgb("+startcolor[0]+", "+startcolor[1]+", "+startcolor[2]+")"

    document.getElementById("fscrollerl").innerHTML=begintag+fcontentl[index]+closetag

    if (fadelinks)

      linkcolorchange(1);

    colorfade(1, 15);

  }

  else if (ie4)

    document.all.fscrollerl.innerHTML=begintag+fcontentl[index]+closetag;

  index++

}



// colorfade() partially by Marcio Galli for Netscape Communications.  ////////////

// Modified by Dynamicdrive.com



function linkcolorchange(step){

  var obj=document.getElementById("fscrollerl").getElementsByTagName("A");

  if (obj.length>0){

    for (i=0;i<obj.length;i++)

      obj[i].style.color=getstepcolor(step);

  }

}



/*Rafael Raposo edited function*/

var fadecounter;

function colorfade(step) {

  if(step<=maxsteps) {	

    document.getElementById("fscrollerl").style.color=getstepcolor(step);

    if (fadelinks)

      linkcolorchange(step);

    step++;

    fadecounter=setTimeout("colorfade("+step+")",stepdelay);

  }else{

    clearTimeout(fadecounter);

    document.getElementById("fscrollerl").style.color="rgb("+endcolor[0]+", "+endcolor[1]+", "+endcolor[2]+")";

    setTimeout("changecontent()", delay);

	

  }   

}



/*Rafael Raposo's new function*/

function getstepcolor(step) {

  var diff

  var newcolor=new Array(3);

  for(var i=3;i<5;i++) {

    diff = (startcolor[i]-endcolor[i]);

    if(diff > 0) {

      newcolor[i] = startcolor[i]-(Math.round((diff/maxsteps))*step);

    } else {

      newcolor[i] = startcolor[i]+(Math.round((Math.abs(diff)/maxsteps))*step);

    }

  }

  return ("rgb(" + newcolor[3] + ", " + newcolor[4] + ", " + newcolor[5] + ")");

}



if (ie4||DOM2)

  document.write('<div id="fscrollerl" style="border:0px;width:'+fwidthl+';height:'+fheightl+'"></div>');



if (window.addEventListener)

window.addEventListener("load", changecontent, false)

else if (window.attachEvent)

window.attachEvent("onload", changecontent)

else if (document.getElementById)

window.onload=changecontent

