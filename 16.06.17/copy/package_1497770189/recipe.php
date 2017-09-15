<?php session_start();
$dbc=mysqli_connect('vasiliy7.mysql.ukraine.com.ua','vasiliy7_iceb','vasiliy_iceb','vasiliy7_ice3')
or die('error_mysql');
mysqli_set_charset($dbc,"utf8");
$query44="select  * from recipe ";
$result44=mysqli_query($dbc, $query44)
or die('errorBD44lll');
if(isset($_POST['text'])) {
 $resp=array();
			while( $row44=mysqli_fetch_assoc($result44) ) 
			{
$resp[]=$row44;
  }

header('Content-Type: application/json');


$end_ar=[
"resp_recipe"=>$resp
];
 echo json_encode($end_ar);
 mysqli_close($dbc);  }       
else { require_once('recipe_without_post.php');}	
?>
