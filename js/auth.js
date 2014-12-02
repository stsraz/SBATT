var auth=(function() {
	alert("Auth");
	var role;
	var sbaName=getCookie('sba-name');
	var sbaKey=getCookie('sba-key');
	var data={
		name: sbaName,
		key: sbaKey
	};
	$.post('php/auth.php',data,function(response) {
		if(response!="") {
			setCookie('sba-key',response,1);
			data={
				reqdata: 'role',
				detail: sbaName
			};
			$.post('php/callback.php',data,function(response) {
				role=response;
			});
		}
		else {
			role="";
		}
	})
	.fail(function(jqXHR,textStatus,errorThrown) {
		alert(textStatus+"|||||"+errorThrown);
	});
	return role;
});
