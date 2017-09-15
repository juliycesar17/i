<?php session_start();
$dbc=mysqli_connect('vasiliy7.mysql.ukraine.com.ua','vasiliy7_iceb','vasiliy_iceb','vasiliy7_ice3')
or die('error_mysql');
mysqli_set_charset($dbc,"utf8");

$email=$_POST['email'] ;
$password=$_POST['passw'];
$query="insert into users(email, password)  values ('$email', '$password')";
$result=mysqli_query($dbc, $query)
or die('errorBD');

if (isset($_POST['email'] , $_POST['passw'])){
$success=$_POST['email'];

$pp=[
 "scs"=>$success
 ];

 header('Content-Type: application/json');
$end_ar=[
"ppp"=>$pp
];
echo json_encode($end_ar);
}
mysqli_close($dbc);
