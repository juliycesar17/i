<?php 
$sessionId = session_id(); 
If(empty($sessionId)) {session_start();}
 echo json_encode($_SESSION['nnn']);													
?>	