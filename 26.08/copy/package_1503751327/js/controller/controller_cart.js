 function ListControllercart() {
  ListControllerParent.apply(this, Array.prototype.slice.call(arguments, 0));
  var _this=this;
 //----------------------
  arguments[1].browseshop.attachd(function () {
	//var rendering=arguments[1].url;
	//switch (rendering) {
   // case    'get_flexi_one.php':
	var ddd=arguments[1];
	_this.addItem(ddd);
	//break;
	//}
});
//===================================
 arguments[1].cartclcik.attachd(function () {
   var zzz=arguments[0];
   var zza=zzz._model;
   var tty=zza.ittems;
   var title=arguments[1].title;
	console.log(arguments[1].title);
   _this.cartt(tty, 'cart.php', title);
  });
//========================================
 arguments[1].addButtonClickedtocart.attachd(function () {
   console.log(arguments[1]);
	_this.addtocartt(arguments[1]);
  });
//=============add_qty==========================
 arguments[1].add_qty.attachd(function () {
  _this.add_qnty(arguments);
  });
 //=============remove_qty==========================
 arguments[1].remove_qty.attachd(function () {
  _this.rem_qnty(arguments);
  });
 //==================add=======================
$("body" ).on( "click", '.add', function(e) {
  var _thiss=this;
  var url_add, iddd_iddd, name_item, price_price, image_image;
  localStorage.setItem('iddd_iddd', _thiss.getAttribute('data-id'));
  localStorage.setItem('name_item', _thiss.getAttribute('data-name'));
  localStorage.setItem('price_price', _thiss.getAttribute('data-price'));
  localStorage.setItem('image_image', _thiss.getAttribute('data-image'));
  localStorage.setItem('url_add', _thiss.getAttribute('data-param'));

  var url_addd=localStorage.getItem('url_add');
  var iddd_iddd_iddd=localStorage.getItem('iddd_iddd');
  var imagey_y=localStorage.getItem('image_image');
  var price_price_price=localStorage.getItem('price_price');
  var name_name_name=localStorage.getItem('name_item');
  e.preventDefault();
  e.stopPropagation();
	_this._view.addButtonClickedtocart.notify({url:url_addd, id:iddd_iddd_iddd, tl:name_name_name, pr:price_price_price, image:imagey_y, "title":"cartshop"});
 });

//------------------------cart--------------------------------------------
$("#mmm" ).on( "click", '#cart', function(e) {
  var _thiss=this;
  cart='cart.php';
 // for_post_cart=_thiss.getAttribute('data-cart');
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/cart.php' && window.location!='http://joyforchild.com/ice/cart.php'){
  if(window.location.origin=='http://www.joyforchild.com'){
  history.pushState('http://www.joyforchild.com/ice/cart.php', document.title, 'http://www.joyforchild.com/ice/cart.php');
}
  else {history.pushState('http://www.joyforchild.com/ice/cart.php', document.title, 'http://joyforchild.com/ice/cart.php')}
}
  _this._view.cartclcik.notify({url:cart,'title':'cartshop' });
});
//------------------------------------------------------
$("body" ).on( "click", '#addqty', function(e) {
  var _thiss=this;
  var url_for_ch_qty, id_for_ch_qty;
  localStorage.setItem('url_for_ch_qty', _thiss.getAttribute('data-param'));
  localStorage.setItem('id_for_ch_qty', _thiss.getAttribute('data-id'));

  var url_qty=localStorage.getItem('url_for_ch_qty');
  var id_qty=localStorage.getItem('id_for_ch_qty');

  e.preventDefault();
  e.stopPropagation();
  //_this._view.addButtonClicked.notify({url:url_qty, id:id_qty});
  _this._view.add_qty.notify({url:url_qty, id:id_qty, 'title':'cartshop'});


 });
//====================================================
$("body" ).on( "click", '#removeqty', function(e) {
  var _thiss=this;
  var url_for_ch_qtyy, id_for_ch_qtyy;
  localStorage.setItem('url_for_ch_qtyy', _thiss.getAttribute('data-param'));
  localStorage.setItem('id_for_ch_qtyy', _thiss.getAttribute('data-id'));

  var url_qty=localStorage.getItem('url_for_ch_qtyy');
  var id_qty=localStorage.getItem('id_for_ch_qtyy');

  e.preventDefault();
  e.stopPropagation();
  //_this._view.addButtonClicked.notify({url:url_qty, id:id_qty});
  _this._view.remove_qty.notify({url:url_qty, id:id_qty});


 });
}
ListControllercart.prototype = Object.create(ListControllerParent.prototype);
ListControllercart.prototype.constructor = ListControllercart;

ListControllercart.prototype.addtocartt =  function () {
  console.log(arguments[0].title);
 var _this=this;
 var eee=arguments[0].title;
  var url_addd=localStorage.getItem('url_add');
  var iddd_iddd_iddd=localStorage.getItem('iddd_iddd');
  var imagey_y=localStorage.getItem('image_image');
  var price_price_price=localStorage.getItem('price_price');
  var name_name_name=localStorage.getItem('name_item');
 //==========
 return this._model.addtocartt(iddd_iddd_iddd, name_name_name,price_price_price,imagey_y,eee ); //(!!!!!!!!!!!!!!!!!!!!
}

ListControllercart.prototype.cartt =  function () {
  var _this=this;
  var eee=arguments;
  console.log(arguments);
  return this._model.ajax(eee).then(function(msg){
     //var title='cartsh';
	return _this._model.cartt(msg, 'cart.php', title)});
}

ListControllercart.prototype.add_qnty =  function () {
  var _this=this;
    console.log(arguments);
    //console.log(arguments[1]);
    var title=arguments[0][1].title;
  return this._model.ajax( {'wwww':arguments, 'urrrl':arguments[0][1], 'title':title}).then(function(msg){
    console.log(arguments);
  return _this._model.add_qnty( msg, arguments )});;
}

//==========================================
ListControllercart.prototype.rem_qnty =  function () {
  var _this=this;
  return this._model.ajax( {'wwww':arguments, 'urrrl':arguments[0][1]}).then(function(msg){
  return _this._model.remove_qnty( msg, arguments )});;
}
