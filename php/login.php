<?php
	//Require the database functions
	require_once 'database.php';
	//Initialize response variable
	$resvar;
	//Initialize retrieved key variable
	$skey;
	//Get username and payload out of post queue
	$uname=$_POST['uname'];
	$payload=$_POST['payload'];
	//Validate payload against db
	$what='skey';
	$from='users';
	$where='uname='.'"'.$uname.'"';
	$order_by='skey';
	$response=Database::select($what,$from,$where,$order_by);
	foreach($response as $verify) {
		$skey=$verify['skey'];
	}
	
	//if(no validate) then set response variable as ""
	if($payload!=$skey) {
		$resvar="";
	}
	//if(validate) then
	if($payload==$skey) {
		//get role and display name from DB, add to array
		$what='dname,role';
		$from='users';
		$where='uname='.'"'.$uname.'"';
		$order_by='dname';
		$response=Database::select($what,$from,$where,$order_by);
		foreach($response as $retdata) {
			$resvar['dname']=$retdata['dname'];
			$resvar['role']=$retdata['role'];
		}
		//Convert array to JSON
		$resvar=json_encode($resvar);
	}
	//return response variable
	echo $resvar;
?>