<?php 
session_start();
$q =$_POST['q']; //id
$price=$_POST['price1'];
$titl=$_POST['titl1'];
$image=$_POST['img'];

if(isset($_SESSION['nnn'][$q])) {
        $_SESSION['nnn'][$q]['qty'] += 1;
    } else {
	    // $_SESSION['nnn'][$q]['id'] = $q;
         $_SESSION['nnn'][$q]['qty'] = 1;
		 $_SESSION['nnn'][$q]['pr'] = $price;
		 $_SESSION['nnn'][$q]['tt'] = $titl;
		 $_SESSION['nnn'][$q]['img'] = $image;
    }
	
	//if ( $_SESSION['nnn'][$qq]['id'] = $q;){
	echo (json_encode($_SESSION['nnn'][$q]));
?>	 