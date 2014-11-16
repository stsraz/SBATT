(function() {
	var init=(function() {
		var sbaKey=getCookie('sba-key');
		var sbaName=getCookie('sba-name');
		if(sbaKey!="" && sbaName!="") {
			var role=validateLogin(sbaKey,sbaName);
			if(role!="") {
				$("#miscData").text()=role;
			}
			else {
				$("#miscData").text()="login";
			}
		}
	});
});