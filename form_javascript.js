function validate()
	{
	var uname=document.getElementById("uname");
	var pass=document.getElementById("pass");
	var email=document.getElementById("email");

	if(uname.value.trim()=="")
	{
		alert("Please fill username !");
		uname.style.border="solid 2px red";
		document.getElementById("uwrong").style.visibility="visible";
		return False;

	}
	else if(email.value.trim()=="")
	{
		alert("Please fill Email !");
		email.style.border="solid 2px red";
		document.getElementById("ewrong").style.visibility="visible";
		return False;
	}
	else if(pass.value.trim()=="")
	{
		alert("Please fill password !");
		pass.style.border="solid 2px red";
		document.getElementById("pwrong").style.visibility="visible";
		return False;
	}
	else if(pass.value.trim().length<6)
	{
		alert("Password is too short !");
		pass.style.border="solid 2px red";
		document.getElementById("pwrong").style.visibility="visible";
		return False;
	}
	else
	{
	return true;
	}
}
