<?php
mysqli_set_charset($dbc,"utf8");
if (!isset($_SESSION['nnn'])) $_SESSION['nnn']=array();
$id = session_id();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
<!--<title>{{title}}</title>-->
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
<script id="title" type="text/x-handlebars-template" >
<title>{{title}}</title>
</script>
<script id="auth" type="text/x-handlebars-template" >
{{hhhh}}
<div></div>


</script>
<script id="index" type="text/x-handlebars-template" >
{{hhhh}}

  <!-- First Photo Grid МОРОЖЕНОЕ-->
 <div class="w3-container w3-red w3-center w3-padding-128">
  <h1 class="w3-margin w3-jumbo">МОРОЖЕНОЕ</h1>
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
 <div class="w3-third w3-container w3-margin-bottom" >
 <a  href='select-cat.php?vid={{vse_vidi_tov}}'  class="sel_cat" data-function='flexi' data-param='select-cat.php' data-url='select-cat'  data-vid='{{vse_vidi_tov}}' >
      <img src={{image}} alt="{{image}}" style="width:70%; display:block; margin:auto;" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p onclick='forimages();'><b>{{vse_vidi_tov}}</b></p>
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
 <a  data-v="{{../../ppp.sess_vid}}" class="choose-brend" href="choose-brend.php?q={{brend}}&vvv={{../../ppp.sess_vid}}" data-param="choose-brend.php" data-brend='{{brend}}'  data-ses={{../../ppp.sess_vid}}>
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
 <a  href="your-ice.php?q={{id}}" data-param="your-ice.php" data-idd="{{id}}" class="one_ice">
      <img src="image/items/{{image}}" alt="{{image}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{enterprise}}</b></p>
		<!--<button  data-id="{{id}}" data-price='{{price}}' data-name='{{ice_cream}}' data-image='{{image}}' class="w3-btn w3-black w3-padding-large w3-hover-red add">добавить в корзину</button>-->

      </div>
    </div>
	{{/each}}
	  </div>
{{/grouped_each}}
</script>
<script id="flexi-one" type="text/x-handlebars-template">
{{hhhh}}
	{{help}}
{{accesstom}}
{{#each this.resppp}}
<div class="w3-row-padding aaa">
 <div class="w3-third w3-container w3-margin-bottom">
 <a  >
      <img src="image/items/{{image}}" alt="{{image}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{enterprise}}</b></p>
		<button class="add"  data-id="{{id}}" data-idd="{{id}}" data-param='get_flexi_one.php' data-price='{{price}}' data-name='{{ice_cream}}' data-image='{{image}}' class="w3-btn w3-black w3-padding-large w3-hover-red add">{{add}}</button>
		                                                  <!--29/01/17 нужны параметры для товара -->
      </div>
    </div>
	  </div>
	  {{/each}}
</script>
<script id="flexi-one-in-cart" type="text/x-handlebars-template">
{{hhhh}}
{{accesstom}}
{{#each this.resppp}}
<div class="w3-row-padding aaa">
 <div class="w3-third w3-container w3-margin-bottom">
 <a  >
      <img src="image/items/{{image}}" alt="{{image}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{enterprise}}</b></p>
		<button class="add" >товар в корзине</button>

      </div>
    </div>
	  </div>
	  {{/each}}
</script>
<script id="addtocart" type="text/x-handlebars-template">

{{hhhh}}

<div class="w3-row-padding aaa">
 <div class="w3-third w3-container w3-margin-bottom">
 <a  class="">
      <img src="image/items/{{img}}" alt="{{img}}" style="width:100%" class="w3-hover-opacity">
	  </a>
      <div class="w3-container w3-white">
        <p><b>{{tt}}</b></p>
		<button data-price='{{pr}}' data-name='{{tt}}' data-image='{{img}}' class="w3-btn w3-black w3-padding-large w3-hover-red add">в корзине</button>

      </div>
    </div>
	  </div>

</script>
<script id="carttt" type="text/x-handlebars-template">
{{hhhh}}

<div id='ccc' class="w3-container">
  <h2>Корзина</h2>
  {{if_eq}}

  <table class="w3-table w3-bordered">
  <tr>
      <th>название товара</th>
      <th>цена</th>
      <th>товар</th>
	   <th></th>
    </tr>
  {{#each this}}
    <tr>
      <th>"{{vid}}"</th>
      <th>{{2}}</th>
      <th><img src='image/items/{{img}}' alt="{{img}}"/></th>
	  <th><button ><a data-id="{{idq}}" id='addqty' data-param='change_qty.php' data-button="plus" href='change_qty.php?q={{0}}'>+</a></button></th>
	   <th><input type='text' value='{{qty}}'/></th>
	   <th><button><a data-id="{{idq}}" id='removeqty' data-param='change_qty.php' data-button="minus" href='remove_qty.php?q={{0}}'>-</a></button></th>
		 <th><button><a href="" class="del">удалить</a></button></th>
    </tr>
{{/each}}
  </table>
</div>
</script >

<script id='recipes' type="text/x-handlebars-template">
{{hhhh}}
  {{#each this.resp_recipe}}
<div class="w3-col l8 s12" id="templ_for_recipe">
  <div class="w3-card-4 w3-margin w3-white">
    <img src="image/recipe/{{image}}" alt="" style="width:100%">
    <div class="w3-container w3-padding-8">
      <h3><b>{{name}}</b></h3>
      <h5>{{ingridients}}</h5>
    </div>
    <div class="w3-container">
      <p>{{recipe}}</p>
      <div class="w3-row">
        <div class="w3-col m8 s12">

        </div>
      </div>
    </div>
  </div>
  <hr>
</div>
{{/each}}
</script>
<script id='blog_templ' type="text/x-handlebars-template">
{{hhhh}}
 {{#each this.blog}}
<div id="blog_inner" class="w3-content">

  <!-- About Section -->
  <div class="w3-row w3-padding-64" id="about">
    <div class="w3-col m6 w3-padding-large w3-hide-small">
     <img src='image/blog/{{image}}' class="w3-round w3-image w3-opacity-min" alt="Table Setting" >
    </div>

    <div class="w3-col m6 w3-padding-large">
      <h1 class="w3-center">{{name}}</h1><br>
      <h5 class="w3-center">{{data}}</h5>
      <p class="w3-large"></p>
      <p class="w3-large w3-text-grey w3-hide-medium">{{body}}</p>
    </div>
  </div>
  {{/each}}
</script>
<script id='for_login' type="text/x-handlebars-template">
<form id='form1' class="w3-container w3-card-4" >
  <h2 class="w3-text-blue">Вход</h2>
  <p>войдите или зарегистрируйтесь.</p>
  <p>
  <label class="w3-text-blue"><b>емейл</b></label>
  <input class="w3-input w3-border" name="email" type="email"></p>
  <p>
  <label class="w3-text-blue"><b>пароль</b></label>
  <input class="w3-input w3-border" name="passw" type="text"></p>

  <p>
  <!--<button class="w3-btn w3-blue"><a>войти</a></button></p>-->
  <input type="submit" id="enter"  value="войти"/>

</form>
  <button class="w3-btn w3-blue"><a id="for_registr_id" data-param='for_registr.php' >зарегистрироваться</a></button></p>
</script>
<script id='for_registr' type="text/x-handlebars-template">
<form id='form2' data-param='add_user.php' class="w3-container w3-card-4" method='post' action='add_user.php'>
  <h2 class="w3-text-blue">Вход</h2>
  <p>зарегистрируйтесь.</p>
  <p>
  <label class="w3-text-blue"><b>емейл</b></label>
  <input class="w3-input w3-border" name="email" type="email"></p>
  <p>
  <label class="w3-text-blue"><b>пароль</b></label>
  <input class="w3-input w3-border" name="passw" type="text"></p>

  <p>
<input type="submit" id="enter2"  value="регистрация"/>
  <!--<button class="w3-btn w3-blue"><a id="for_registr_id_2">регистрация</a></button>-->

  </p>
</form>
</script>
<script id='success_registr' type="text/x-handlebars-template">
{{hhhh}}

<form class="w3-container w3-card-4">
  <h2 class="w3-text-blue">Вход</h2>
  <p>{{ this.ppp.scs}}, Вы удачно зарегистрировались, поздравляем!</p>
  <p><a data-param='' id='' >авторизироваться</a></p>
  <p><a data-param='' id='' >вернуться на главную страницу</a></p>
  <p>
</form>

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
  <a href="index.php" id="ind"  class="w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"> главная</i></a>
  <!-- href="dog_main.php" -->
  <a href="shop.php" class="shop" class="w3-padding"><i class="fa fa-th-large fa-fw w3-margin-right"> магазин</i></a>
  <a href="recipe.php" id='recipe' class="w3-padding "><i class="fa fa-th-large fa-fw w3-margin-right"> рецепты</i></a>
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
    <h1><b>мороженое</b></h1>
    <div id='mmm' class="w3-section w3-bottombar w3-padding-16">
    <button class="w3-btn w3-white"><i class="fa fa-home"></i>главная</button>
	<button class="w3-btn w3-white"><i class="fa fa-user"></i><a id='login_purpose' data-param='login.php'>вход</a></button>
	<button  class="w3-btn w3-white "><i class="glyphicon glyphicon-shopping-cart"></i><a href='cart.php' data-param='cart.php' data-cart='ii' id='cart'> корзина</a></button>
    <button class="w3-btn w3-white w3-hide-small"> новинки</button>
    <button class="w3-btn w3-white w3-hide-small"><i class="fa fa-map-pin w3-margin-right"></i><a id='blog' data-param='blog_n.php' href='blog_n.php'> блог</a></button>
    </div>
  </header>
  <!-- Header -->


<!-- End page content -->



 <footer class="w3-container w3-padding-32 w3-white">
  <div class="w3-row-padding">
    <div class="w3-third">
      <h3>реклама</h3>
      <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      <p>Powered by <a href="http://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
    </div>

    <div class="w3-third">
      <h3>записи блога</h3>
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
      <h3>сотрудничество</h3>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"/>
<!--<script src="js/hist.js" defer></script>-->
<script src="js/for_images.js" defer></script>
<script src="js/handlebars-v4.0.5.js"></script>
<!--<script src="js/ind.js"></script>-->
<script src="js/brends.js?<?php echo date("h:i:sa");?>" defer></script>
<!--<script src="js/helper_for_addtocart.js"></script>-->
<script src="js/event.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/model/modelclass.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/view/viewclass.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/view/view_shop.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/view/view_cart.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/view/view_login.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/controller/controllerclass.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/for_ajax.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/check.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/model/model_shop.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/model/model_cart.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/model/model_login.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/accesstomodel.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/controller/controller_cart.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/controller/controller_login.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/controller/controller_shop.js?<?php echo date("h:i:sa");?>" defer></script>

<script src="js/app.js?<?php echo date("h:i:sa");?>" defer></script>
<!--<script src="js/start.js"></script>-->
<script src="js/help.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/for_if_helper.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/helper_for_one.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/row.js?<?php echo date("h:i:sa");?>" defer></script>
<!--<script src="js/onpopstate.js"></script>-->
<script src="js/ajax.js?<?php echo date("h:i:sa");?>" defer></script>
<script src="js/yellow.js?<?php echo date("h:i:sa");?>" defer></script>
<!--<script src="js/onpopst.js"></script>-->
</body>
</html>
