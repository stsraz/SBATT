<?php
	$uname=$_POST['name'];
	$subkey=$_POST['key'];
	
	$what='ckey';
	$from='users';
	$where='uname='.$uname;
	$order_by='ckey';
	
	$result=Database::select($what,$from,$where,$order_by);
	foreach($result as $key) {
		$stokey=$key['ckey'];
	}
	
	if($stokey==$subkey) {
		$nKey=uniqid($uname,TRUE);
		// Update database with new key
		return $nKey;
	}
	else {
		return "";
	}
?>