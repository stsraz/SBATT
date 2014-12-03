/**
 * @Joe Rasmussen
 */
$(document).ready(function() {
	auth=getCookie('uname');
	if(auth!="") {
		role=getCookie('role');
		sceneLoad(role);
	}
	else {sceneLoad('guest');}
});

var jqInit = function(type) {
	switch(type) {
		case "guest":
			$('.menu').menu();
			$('.tabs-login').tabs();
			$("#login").on("click",function() {login();});
			break;
		case "techMenu":
			$("#logout").on( "click", function() {logout();});
			break;
		case "adminMenu":
			$( "#logout" ).on( "click", function() {logout();} );
			break;
	}
};

var sceneLoad=function(role) {
	switch(role) {
		case 'guest':
			$('#mainWrapper').load("templates/start.html #guestTabs",function() {jqInit("main");jqInit("guest");});
			break;
		case 'tech':
			$('#mainWrapper').load("templates/start.html #homeTabs",function() {jqInit("main");});
			$('.tabs-login').tabs();
			$('.tabs-login').switchClass('tabs-login','tabs',5000);
			$('#navWrapper').load("templates/start.html #techMenu",function() {jqInit("nav");jqInit("techMenu");}).fadeIn(5000);
			break;
		case 'admin':
			$('#mainWrapper').load("templates/start.html #adminTabs",function() {jqInit("main");});
			$('.tabs-login').tabs();
			$('.tabs-login').switchClass('tabs-login','tabs',5000);
			$('#navWrapper').load("templates/start.html #adminMenu",function() {jqInit("nav");jqInit("adminMenu");}).fadeIn(5000);
			break;
	}
};

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
			setCookie('uname',uname,1);
			setCookie('dname',dname,1);
			setCookie('role',role,1);
			sceneLoad(role);
		}
		else {alert("Login Failed");};
	});
};

var logout=function() {
	setCookie('dname','',0);
	setCookie('uname','',0);
	setCookie('role','',0);
	sceneLoad('guest');
};

