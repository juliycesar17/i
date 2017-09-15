function ListController(modell, vieww) {
    this._model = modell;
    this._view = vieww;
    var _this = this;
	//------------------------------------------------------------------
	_this._view._elements.addButton.on( "click", function(e) {
e.preventDefault;
 e.stopPropagation();
 if(window.location!='http://www.joyforchild.com/ice/dog_main.php'){
 history.pushState('http://www.joyforchild.com/ice/dog_main.php', document.title, 'http://www.joyforchild.com/ice/dog_main.php');}
 _this._view.addButtonClicked.notify({url:'dog_main.php'});
return false;
 });	
  //==============================flexi=============================*******************************************
$("body" ).on( "click", '.dog_flexi', function(e) {
var _thiss=this;
url_for_flexi=_thiss.getAttribute('data-param');
param_for_flexi_vid=_thiss.getAttribute('data-vid');
	e.preventDefault;
    e.stopPropagation();
   if(window.location!='http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid')){
  history.pushState('http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid'), document.title, 'http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid'));}
	_this._view.addButtonClicked.notify({url:url_for_flexi});
	return false;
 });	
 //=================cart==========================
 $("body" ).on( "click", '.add', function(e) {

var _thiss=this;
iddd=_thiss.getAttribute('data-id');
tl=_thiss.getAttribute('data-name');
pr=_thiss.getAttribute('data-price');
im=_thiss.getAttribute('data-image');
addtocart=_thiss.getAttribute('data-param');
console.log(iddd);
	e.preventDefault;
    e.stopPropagation();
	_this._view.addButtonClicked.notify({url:addtocart});
	return false;
 });	
  //----------------flexi-tov---------------------
  $("body" ).on( "click", '.flexi-tov', function(e) {

var _thiss=this;
url_for_flexi_one=_thiss.getAttribute('data-param');
arrr=_thiss.getAttribute('data-brend');
arrrv=_thiss.getAttribute('data-v');
arrr_s=_thiss.getAttribute('data-ses');
console.log(url_for_flexi_one);
	e.preventDefault;
    e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')){
  history.pushState('http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'), document.title, 'http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'));}
	_this._view.addButtonClicked.notify({url:url_for_flexi_one});
	return false;
 });
  //-----------------------------------------------
  $("body" ).on( "click", '.flex_f_one', function(e) {
var _thiss=this;
arfa=_thiss.getAttribute('data-param');
console.log(arfa);
id_for_fl_one=_thiss.getAttribute('data-idd');
	e.preventDefault;
    e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/get_flexi_one.php?q='+$(this).attr('data-idd')){
  history.pushState('http://www.joyforchild.com/ice/get_flexi_one.php?q='+$(this).attr('data-idd'), document.title, 'http://www.joyforchild.com/ice/get_flexi_one.php?q='+$(this).attr('data-idd'));}
	_this._view.addButtonClicked.notify({url:arfa});
	return false;
 });
 //------------------------cart--------------------------------------------
  $( "#mmm" ).on( "click", '#cart', function(e) {
	  var _thiss=this;
cart=_thiss.getAttribute('data-param');
for_post_cart=_thiss.getAttribute('data-cart');
e.preventDefault;
 e.stopPropagation();
 if(window.location!='http://www.joyforchild.com/ice/cart.php'){
 history.pushState('http://www.joyforchild.com/ice/cart.php', document.title, 'http://www.joyforchild.com/ice/cart.php');}
 _this._view.addButtonClicked.notify({url:cart});
 //corzzzina('http://www.joyforchild.com/ice/cart.php', 'iii');       
		 return false;
 });										
    this._view.addButtonClicked.attachd(function () {
    console.log(arguments);
	console.log(arguments[1].url);
	var rendering;
	switch (arguments[1].url) {	
	case 'dog_main.php':
	rendering ='dog_main.php';
	break;
	case 'flexi.php':
	rendering ='flexi.php';
	break;
	case 'flexi-tovari.php':
	rendering ='flexi-tovari.php';
	break;
	case 'get_flexi_one.php':
	rendering ='get_flexi_one.php';
	break;
	case 'add_tocart_n.php':
	rendering ='add_tocart_n.php';
	break;
	case 'cart.php':
	rendering ='cart.php';
	break;
	}
	//_this._view._elements.addButton[0].getAttribute('href')
        _this.addItem(rendering);// чтобі тут получить пхп программу(ценарий) из которой мі получим items
    });

}

ListController.prototype.addItem =  function (el) {
	     var _this=this;
		 this._model.ajax(el).then(function(msg){
		return _this._model.addItem(msg, el)});

    }
