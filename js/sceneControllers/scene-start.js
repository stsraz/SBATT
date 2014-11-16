/**
 * @Joe Rasmussen
 */

$(document).ready(function() {
	guestInit();
	var role = $("#miscData").text();
});

var jqInit = function() {
	$('.tabs').tabs();
	$('#menu').menu();
};

var guestInit = function() {
	// Not this for tech lead pmo and admin; load javascript which loads this
	$('#navWrapper').load("templates/start.html #guestNavMenu",function() {jqInit();});
	$('#mainWrapper').load("templates/start.html #guestTabs",function() {jqInit();});
	$("loginButton").on("click",function() {
		un=$("#username").val();
		pw=$("#password").val();
		data={
			type:'login',
			uname:un,
			pword:pword
		};
		$.post('php/login.php',data,function(response){
			if(response!="") {
				loginInit(response);
			}
			else{
				alert("Login failed.  Please try again.");
			}
		});
	});
};

var loginInit = function(type) {
	switch(type) {
		case 'tech':
		    alert("Tech");
			break;
		case 'lead':
		    alert("Lead");
			break;
		case 'pmo':
		    alert("PMO");
			break;
		case 'admin':
		    alert("Admin");
			break;
	}
};
