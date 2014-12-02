<?php
 	$reqdata=$_POST['reqdata'];
	$reqdata1=$_POST['reqdata1'];
	
	(function($reqdata,$detail) {
		switch($reqdata) {
			case 'role':
				$role;
				$what='role';
				$from='users';
				$where='uname='.$detail;
				$order_by='role';
				$result=Database::select($what,$from,$where,$order_by);
				foreach($result as $role) {
					$role=$role['role'];
				}
				return $role;
				break;
		}
	});
?>