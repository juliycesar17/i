<?php session_start();
$dbc=mysqli_connect('vasiliy7.mysql.ukraine.com.ua','vasiliy7_iceb','vasiliy_iceb','vasiliy7_ice3')
or die('error_mysql');
mysqli_set_charset($dbc,"utf8");
$_SESSION['vid']=$_SESSION['vid']  ? $_SESSION['vid'] : $_GET['vvv'];
$_SESSION['q']=$_SESSION['q']  ? $_SESSION['q'] : $_GET['q'];
$query="select *  from items where enterprise='".$_GET['q']."' and ice_cream='".$_GET['vvv']."' limit 0, 5";
$result44=mysqli_query($dbc, $query)
or die('errorBD');

?>
<!DOCTYPE html>
<html lang="ru">
<head>
<title>ice cream</title>
<meta charset="windows-1251">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 <!--<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>-->
 

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
<style>
html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
.w3-sidenav a,.w3-sidenav h4 {font-weight:bold}
</style>
<!--data-func={{func}}       ?vid={{vse_vidi_tov}}-->
<script id="index" type="text/x-handlebars-template" >

  
  <!-- First Photo Grid-->
 <div class="w3-container w3-red w3-center w3-padding-128">
  <h1 class="w3-margin w3-jumbo"> МОРОЖЕНОЕ</h1>
  <p class="w3-xlarge">ПОКУПАЙ КАЧЕСТВЕННЫЙ ПРОДУКТ</p>
  <button hh="dog_main.php" class="dog_main w3-btn w3-padding-16 w3-large w3-margin-top ">ВПЕРЕД</button>
</div>

  <!-- Footer -->
 
</script>
<script id="dogm" type="text/x-handlebars-template">
{{hhhh}}
{{#grouped_each 3 this.resppp}}
<div class="w3-row-padding aaa">
	{{#each this}}
 <div class="w3-third w3-container w3-margin-bottom">
 <a  href='flexi.php?vid={{vse_vidi_tov}}'  class="dog_flexi" data-function='flexi' data-param='flexi.php' data-url='flexi'  data-vid='{{vse_vidi_tov}}' >
      <img src={{image}} alt="{{image}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{vse_vidi_tov}}</b></p>
		<ul class="w3-ul">
         {{splitTitle brends}}	
		 </ul>
      </div>
    </div>
	{{/each}}
	  </div>
{{/grouped_each}}
</script>
<script id="lg" type="text/x-handlebars-template">
 <div id='ggg' class="w3-container w3-brown">
    <h2>Вход</h2>
  </div>
  <form id='fff' class="w3-container" action="form.asp">
    <p>
    <label class="w3-label w3-text-brown"><b>емайл</b></label>
    <input class="w3-input w3-border w3-sand" name="first" type="text"></p>
    <p>
    <label class="w3-label w3-text-brown"><b>пароль</b></label>
    <input class="w3-input w3-border w3-sand" name="last" type="text"></p>
    <p>
    <button class="w3-btn w3-brown"><a href='enter.php'>войти</a></button></p>
  </form>
</script>
<script id="flexxxi" type="text/x-handlebars-template">
{{hhhh}}
	{{#grouped_each 3 this.resppp}}
<div class="w3-row-padding aaa">
	{{#each this}}
 <div class="w3-third w3-container w3-margin-bottom">
 <a  data-v="{{../../ppp.0.sess_vid}}" class="flexi-tov" href="flexi-tovari.php?q={{brend}}&vvv={{../../ppp.0.sess_vid}}" data-param="flexi-tovari.php" data-brend='{{brend}}'  data-ses={{../../ppp.0.sess_vid}}>
      <img src="image/brends/{{image}}" alt="{{image}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{brend}}</b></p>
		
      </div>
    </div>
	{{/each}}
	  </div>
{{/grouped_each}}
</script>
<script id="flexi-for-tov" type="text/x-handlebars-template">
{{hhhh}}
	{{#grouped_each 3 this.resppp}}
<div class="w3-row-padding aaa">
	{{#each this}}
 <div class="w3-third w3-container w3-margin-bottom">
 <a  href="get_flexi_one.php?q={{id}}" data-param="get_flexi_one.php" data-idd="{{id}}" class="flex_f_one">
      <img src="image/items/{{image}}" alt="{{image}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{enterprise}}wow</b></p>
		<button  data-id="{{id}}" data-price='{{price}}' data-name='{{ice_cream}}' data-image='{{image}}' class="w3-btn w3-black w3-padding-large w3-hover-red add">добавить в корзину</button>
		
      </div>
    </div>
	{{/each}}
	  </div>
{{/grouped_each}}
</script>
<script id="flexi-one" type="text/x-handlebars-template">
{{hhhh}}
{{#each this.resppp}}
<div class="w3-row-padding aaa">
 <div class="w3-third w3-container w3-margin-bottom">
 <a  >
      <img src="image/items/{{image}}" alt="{{image}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{enterprise}}</b></p>
		<button class="add" data-id="{{id}}" data-param='add_tocart_n.php' data-price='{{price}}' data-name='{{ice_cream}}' data-image='{{image}}' class="w3-btn w3-black w3-padding-large w3-hover-red add">добавить в корзину</button>
		
      </div>
    </div>
	  </div>
	  {{/each}}
</script>
<script id="addtocart" type="text/x-handlebars-template">
{{hhhh}}
{{#each this}}
<div class="w3-row-padding aaa">
 <div class="w3-third w3-container w3-margin-bottom">
 <a  class="">
      <img src="image/items/{{img}}" alt="{{img}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{tt}}</b></p>
		<button  data-id="{{id}}" data-price='{{pr}}' data-name='{{tt}}' data-image='{{img}}' class="w3-btn w3-black w3-padding-large w3-hover-red add">в корзине</button>
		
      </div>
    </div>
	  </div>
	  {{/each}}
</script>
<script id="carttt" type="text/x-handlebars-template">
<div id='ccc' class="w3-container">
  <h2>Корзина</h2>
  <p>Вы выбрали следующие товары:</p>

  <table class="w3-table w3-bordered">
  <tr>
      <th>название товара</th>
      <th>цена</th>
      <th>товар</th>
	   <th></th>
    </tr>
  {{#each this}}
    <tr>
      <th>{{tt}}</th>
      <th>{{pr}}</th>
      <th><img src='image/items/{{img}}' alt="{{img}}"/></th>
	  <th><button ><a data-id="{{id}}" id='addqty' data-button="plus" href='change_qty.php?q={{id}}'>+</a></button></th>
	   <th><input type='text' value='{{qty}}'/></th>
	   	 <th> <button><a data-id="{{id}}" id='removeqty' data-button="minus" href='remove_qty.php?q={{id}}'>-</a></button></th>
		 <th><button><a href="" class="del">удалить</a></button></th>
    </tr>
{{/each}}
  </table>
</div>

</script>
</head>
<body class="w3-light-grey w3-content" style="max-width:1600px">

<!-- Sidenav/menu -->
<nav class="w3-sidenav w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidenav"><br>
  <div class="w3-container">
    <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding" title="close menu">
      <i class="fa fa-remove"></i>
    </a>
    <img src="img_avatar_g2.jpg" style="width:45%;" class="w3-round"><br><br>
    <h4 class="w3-padding-0"><b>НАВИГАЦИЯ</b></h4>
    <p class="w3-text-grey">Template by W3.CSS</p>
  </div>
  <a href="index.php"     id="ind" class="w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"> главная</i></a>
  <a href="dog_main.php"  class="dog_main" class="w3-padding"><i class="fa fa-th-large fa-fw w3-margin-right"> магазин</i></a>
  <a href="#"  class="w3-padding "><i class="fa fa-th-large fa-fw w3-margin-right"> рецепты</i></a>
  <a href="#" class="w3-padding"><i class="fa fa-th-large fa-fw w3-margin-right"> цены</i></a>
  <a href="#" class="w3-padding"><i class="fa fa-th-large fa-fw w3-margin-right"> контакты</i></a>
   
  <div class="w3-section w3-padding-top w3-large">
    <a href="#" class="w3-hover-white w3-hover-text-indigo w3-show-inline-block"><i class="fa fa-facebook-official"></i></a>
    <a href="#" class="w3-hover-white w3-hover-text-red w3-show-inline-block"><i class="fa fa-pinterest-p"></i></a>
    <a href="#" class="w3-hover-white w3-hover-text-light-blue w3-show-inline-block"><i class="fa fa-twitter"></i></a>
    <a href="#" class="w3-hover-white w3-hover-text-grey w3-show-inline-block"><i class="fa fa-flickr"></i></a>
    <a href="#" class="w3-hover-white w3-hover-text-indigo w3-show-inline-block"><i class="fa fa-linkedin"></i></a>
  </div>
</nav>

<!-- Overlay effect when opening sidenav on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px">
 <header class="w3-container">
    <a href="#"><img src="img_avatar_g2.jpg" style="width:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
    <span class="w3-opennav w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>
    <h1><b>My Portfolio</b></h1>
    <div class="w3-section w3-bottombar w3-padding-16">
       <button class="w3-btn w3-white"><i class="fa fa-home"></i>  главная</button>
	    <button class="w3-btn w3-white"><i class="fa fa-user"></i> вход</button>
	    <button class="w3-btn w3-white "><i class="glyphicon glyphicon-shopping-cart"></i> корзина</button>
      <button class="w3-btn w3-white w3-hide-small"> новинки</button>
      <button class="w3-btn w3-white w3-hide-small"><i class="fa fa-map-pin w3-margin-right"></i> блог</button>
    </div>
  </header>
   <!-- Header -->
   <div class="w3-row-padding aaa">
 <?php $item_num = 0; 
 while( $row44=mysqli_fetch_array($result44) ) {?>
   <?php if ($item_num >0 and $item_num % 3 == 0) { ?>
  </div><div class="w3-row-padding aaa"><?php } ?> 
                 <div class="w3-third w3-container w3-margin-bottom">
 <a  class="flex_f_one" href="get_flexi_one.php?q=<?php echo $row44['id']; ?>" data-param="get_flexi_one.php" data-idd=<?php echo $row44['id'];?> >
      <img src="image/items/<?php echo $row44['image']?>" alt="<?php echo $row44['image']?>" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b><?php echo $row44['enterprise'];?></b></p>
		<button  data-id=<?php echo $row44['id'];?> data-price=<?php echo $row44['price'];?> 
		data-image=<?php echo $row44['image'];?> class="w3-btn w3-black w3-padding-large w3-hover-red add" >добавить в корзину </button>
      </div>
    </div>
  <?php $item_num++; } ?>
   </div>
    <footer class="w3-container w3-padding-32 w3-white">
  <div class="w3-row-padding">
    <div class="w3-third">
      <h3>FOOTER</h3>
      <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      <p>Powered by <a href="http://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
    </div>
  
    <div class="w3-third">
      <h3>BLOG POSTS</h3>
      <ul class="w3-ul w3-hoverable">
        <li class="w3-padding-16">
          <img src="img_workshop.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Lorem</span><br>
          <span>Sed mattis nunc</span>
        </li>
        <li class="w3-padding-16">
          <img src="img_gondol.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Ipsum</span><br>
          <span>Praes tinci sed</span>
        </li>
      </ul>
    </div>

    <div class="w3-third">
      <h3>POPULAR TAGS</h3>
      <p>
        <span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">London</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">IKEA</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">NORWAY</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">DIY</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Baby</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Family</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">News</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Clothing</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Shopping</span>
        <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Sports</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Games</span>
      </p>
    </div>

  </div>
  </footer>

 
 
 
 
 
 
 
 
 
<!-- End page content -->
</div>

<script>
// Script to open and close sidenav
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
</script>

<script src="js/handlebars-v4.0.5.js"></script>
<!--<script src="js/ind.js"></script>-->
<script src="js/brends.js"></script>
<script src="js/prover_for_flexi_tovari.js"></script>
<script src="js/help.js"></script>
<script src="js/row.js"></script>
</body>
</html>

