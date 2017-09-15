<?php
session_start();
$dbc=mysqli_connect('vasiliy7.mysql.ukraine.com.ua','vasiliy7_iceb','vasiliy_iceb','vasiliy7_ice3')
or die('error_mysql');
mysqli_set_charset($dbc,"utf8");
//$_SESSION['vid']=$_SESSION['vid']  ? $_SESSION['vid'] : $_POST['vvv'];04.02.17
//$_SESSION['q']=$_SESSION['q']  ? $_SESSION['q'] : $_POST['q'];04.02.17
$_SESSION['q'] = $_POST['q'];
$_SESSION['vid'] = $_POST['vvv'];
//$query="select *  from items where enterprise='".$_POST['q']."' and ice_cream='".$_POST['vvv']."' limit 0, 5";
$query="select *  from items where ice_cream='".$_POST['vvv']."'  and enterprise='".$_POST['q']."' limit 0, 5";
$result=mysqli_query($dbc, $query)
or die('errorBD');
if(isset($_POST['q'])) {
$ppp=[
 "sess_vid"=>$_SESSION['vid'],
  "sess_qqq"=> $_SESSION['q']
 ];
  $resp=array();
  while($row=mysqli_fetch_array($result)){ 
                 $resp[]=$row;                        }
  header('Content-Type: application/json');
	$end_ar=[
"pp"=>$ppp,
"resppp"=>$resp
];
 echo json_encode($end_ar);			 				 				 				 
mysqli_close($dbc);} else {require('flexi-tovari-without-post.php');}  
?>
	
						
						
									
			