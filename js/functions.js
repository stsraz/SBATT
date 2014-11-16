// Cookie Functions
var setCookie=function(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
};

var getCookie=function(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i<ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	}
	return "";
};

var validateLogin=function(key,name) {
	var returnVar;
	var data={
		sbakey: key,
		sbaname: name
	};
	$.post('php/callback.php',data,function(response) {
		if(response!="") {
			var ra=response.split(";");
			setCookie("sba-key",ra[0],1);
			setCookie("sba-name",ra[1],1);
			returnVar=ra[2];
		}
		else{
			setCookie("sba-key",0,0);
			setCookie("sba-name",0,0);
			returnVar="";
		}
	})	;
	return returnVar;	
};