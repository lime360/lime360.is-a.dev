if (self.parent.frames.length != 0) self.parent.location="http://javascript.internet.com/";

function signUp()
{
email = document.newslettersignup.Email_Address.value;

if (email == "your email here")
	{	
	msg = "JavaScript Source News Signup Form\r\n"
	+ "Please enter your email address in the box below.";
	email = prompt(msg,"you@your-domain.com");
	}

if (email != "" && email != "you@your-domain.com")
	{
	document.newslettersignup.Email_Address.value=email;
	action = "Just click the \"Subscribe Me\" button to "
	+ "join The JavaScript Source News!  Thanks!";
	}

else	{
	action = "Sorry, it doesn't appear you entered your "
	+ "email address.  Please re-enter it and try again!";
	}

alert(action);
}

function doMsgWin() {
windowprops = "width=175,height=160,top=150,left=175,scrollbars=0,menbars=0,location=0,statusbar=0,resizable=0";
msgwin = window.open("http://javascript.internet.com/leave-message.html", "", windowprops);
}

