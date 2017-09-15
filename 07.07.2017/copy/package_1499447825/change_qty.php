<?php 
$sessionId = session_id(); 
If(empty($sessionId)) {session_start();}
$q=$_POST['id'];
$b=$_POST['button'];
	foreach ($_SESSION['nnn'] as $key=>&$value){
if($key==$q){	
        $value['qty']++;
}}
echo json_encode($_SESSION['nnn']);				 
 ?>










