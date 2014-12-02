/**
 * @Joe Rasmussen
 */
$(document).ready(function() {
		sceneLoad();
});

var jqInit = function(type) {
	switch(type) {
		case "nav":
			$('.menu').menu();
			break;
		case "main":
			$('.tabs').tabs();
			$("#login").on("click",function() {login();});
			break;
	}
};

var sceneLoad=function () {
	// Turn this into a generic function for pmo. lead, tech, guest, and admin
	$('#navWrapper').load("templates/start.html #guestMenu",function() {jqInit("nav");});
	$('#mainWrapper').load("templates/start.html #guestTabs",function() {jqInit("main");});
};

//Test Authentication
var login=function() {
	uname=$("#username").val();
	payload=md5(uname+$("#password").val());
	data={
		uname:uname,
		payload:payload
	};
	$.post('php/login.php',data,function(response) {
		if(response!="") {
			rarray=JSON.parse(response);
			dname=rarray['dname'];
			role=rarray['role'];
			setCookie('skey',payload,1);
			setCookie('uname',uname,1);
			setCookie('dname',dname,1);
			setCookie('role',role,1);
			alert(dname);
		}
		else {alert("Login Failed");};
	});
};
