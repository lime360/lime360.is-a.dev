var imageclock=new Object()

	//Enter path to clock digit images here, in order of 0-9, then "am/pm", then colon image:

	imageclock.digits=["clockimages/c0.gif", "clockimages/c1.gif", "clockimages/c2.gif", "clockimages/c3.gif", "clockimages/c4.gif", "clockimages/c5.gif", "clockimages/c6.gif", "clockimages/c7.gif", "clockimages/c8.gif", "clockimages/c9.gif", "clockimages/cam.gif", "clockimages/cpm.gif", "clockimages/colon.gif"]

	imageclock.instances=0

	var preloadimages=[]

	for (var i=0; i<imageclock.digits.length; i++){ //preload images

		preloadimages[i]=new Image()

		preloadimages[i].src=imageclock.digits[i]

	}



	imageclock.imageHTML=function(timestring){ //return timestring (ie: 1:56:38) into string of images instead

		var sections=timestring.split(":")

		if (sections[0]=="0") //If hour field is 0 (aka 12 AM)

			sections[0]="12"

		else if (sections[0]>=13)

			sections[0]=sections[0]-0+"" //Change last 0 into 12 if you want standard time

		for (var i=0; i<sections.length; i++){

			if (sections[i].length==1)

				sections[i]='<img src="'+imageclock.digits[0]+'" />'+'<img src="'+imageclock.digits[parseInt(sections[i])]+'" />'

			else

				sections[i]='<img src="'+imageclock.digits[parseInt(sections[i].charAt(0))]+'" />'+'<img src="'+imageclock.digits[parseInt(sections[i].charAt(1))]+'" />'

		}

		return sections[0]+'<img src="'+imageclock.digits[12]+'" />'+sections[1]+'<img src="'+imageclock.digits[12]+'" />'+sections[2]

	}



	imageclock.display=function(){

		var clockinstance=this

		this.spanid="clockspan"+(imageclock.instances++)

		document.write('<span id="'+this.spanid+'"></span>')

		this.update()

		setInterval(function(){clockinstance.update()}, 1000)

	}



	imageclock.display.prototype.update=function(){

		var dateobj=new Date()

		var currenttime=dateobj.getHours()+":"+dateobj.getMinutes()+":"+dateobj.getSeconds() //create time string

		var currenttimeHTML=imageclock.imageHTML(currenttime)+'<img src="'+((dateobj.getHours()>=12)? imageclock.digits[11] : imageclock.digits[10])+'" />'

		document.getElementById(this.spanid).innerHTML=currenttimeHTML



	}

