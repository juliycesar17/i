var url_for_flexi;
var arf;
var arr;
var arrr;
var arrr_s;
var arfa;
var id_for_fl_one;
var arrrv;
var iddd;
var tl;
var im;
var pr;
var addtocart;
//не перенести ли это все в модель или представление через this?.....
var basket=[];

function check () {
 if($("#fff").length > 0){
	 $('#fff').remove();}
	  if($("#ggg").length > 0){
	 $('#ggg').remove();}
 if  ($('[class~=aaa]').length > 0) {$('[class~=aaa]').remove();}	
  if ($(".aaa").length > 0){
    $('.aaa').remove();}
  if ( $('.w3-padding-128').length> 0 ){$('.w3-padding-128').remove();}
}
// из поля ввода - добавляется в Модель - затем из Модели попадает назад во представление, т. е. поле ввода- это не часть представления , которое мы обновляем
function Event(sender) {
this._sender = null;
    this._sender = sender;
console.log(sender);//то, что публикует???!!!!!!!!!!!!!!!!!! (наблюдатель)
    this._listeners = []; //ПОДПИСЧИКИ-КОЛБЭКИ!!!!!
}
//---------------------------------------------------------------------------------------------------------------
Event.prototype = {
    attachd: function (listener) { // у new Event будет ф-ия attachd , добавляющая новый коллбэк в массив
        //this._listeners=[];
		this._listeners.push(listener);
    },
    notify: function (args) {
                for ( var i = 0; i < this._listeners.length; i += 1) { //для каждого коллбэка
console.log(this._listeners);
            this._listeners[i](this._sender, args); //запускается каждый коллбэк c аргументами args
			console.log(this._sender);
        }
    }
};
//---------------

//--------------------------------------------------------------------------------------------------------------------------------------
/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
 var model_state={};
 var indexes=[];
function ListModel(items) { /* php? javascript*/
//===========================================  
  this._items = items;
     console.log(this);
  this.itemAdded = new Event(this); //_sender=this
  this.itemAddedindex = new Event(this);
}
ListModel.prototype = {
  ajax:    function (el){
  var datta;
  console.log(el);
    switch (el){
	  case  'dog_main.php':
	   datta= {'text':'6'};
	   break;
	   case  'flexi.php' :
	  console.log(arr);
	   datta={"vid":arr};
	   break;
	   case 'flexi-tovari.php':
	   datta={"q":arrr, "vvv":arrrv};
	   break;
	   case 'get_flexi_one.php':
	   datta={"q":id_for_fl_one};
	   break;
	   case 'add_tocart_n.php' :
	   datta= {"q":iddd,"price1":pr,"titl1":tl,"img":im};
	   break;
	}
		var _this=this;
        console.log(datta);
        return $.ajax({
                 type: "POST",
                 url: el,
                 data: datta,
                 //cache: false,
                 dataType:'json',
                 beforeSend: function( xhr ) {
                 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                             }
                        })
   },

    getItems: function () {
		        return this._items;
    },
    addItem: function (item, elem ) {
	          this._elem=elem;               //сюда попадет MSG из котнроллера в разделе THEN
              this._items=item;                 /* item то есть из промт добавляется в массив _items !!!!!!!!!!!!!!!!!!!! */
              console.log( this._elem);
              this.itemAdded.notify({ /*!!!!!*/
              elem: elem
             }
		);
    }
};
//--------------------------------------------------------------------------------------------------------------------------------------------
/**
 * The View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interraction.
 */
function ListView(model, elements) {
    this._model = model;
    this._elements = elements;
		
    this.indexload = new Event(this);    
	this.addButtonClicked = new Event(this);
    this.loadingindex = new Event(this);

    var _this = this;
    // attach model listeners

    this._model.itemAdded.attachd(function () {
	console.log(arguments[1].elem);
	var rendering;
	switch (arguments[1].elem) {	
	case 'dog_main.php':
	rendering ='#dogm';
	break;
	case 'flexi.php':
	rendering ='#flexxxi';
	break;
	case 'flexi-tovari.php':
	rendering ='#flexi-for-tov';
	break;
	case 'get_flexi_one.php':
	rendering ='#flexi-one';
	break;
	case 'add_tocart_n.php':
	rendering ='#addtocart';
	break;
	case 'dog_main.php':
	rendering ='#dogm';
	break;
	}
      return  _this.rebuildList(rendering);
    });
	
	
	//-------------------------------------------------
	this._model.itemAddedindex.attachd(function () {
        _this.indexloadp();
    });
	//=============================СЮДА ОБРАБОТЧИКИ КЛИКОВ !!!!!!!!===========================================================================
    window.onpopstate=function(e) {
		console.log(event.state);
		var newval;
		 var searchString = decodeURIComponent(window.location.search.substring(1));
		 console.log(searchString);
		 var val= searchString.split("=");
		newval=val[1];
		console.log(newval);
		if (typeof arr!=='undefined') {arr=arr } else { arr = newval;}
		
		console.log(arr);
   switch(decodeURIComponent(event.state)) {
	  
	case 'http://www.joyforchild.com/ice/index.php':
   _this.innnn();
   break;
   case 'http://www.joyforchild.com/ice/dog_main.php':
  _this.addButtonClicked.notify({url:'dog_main.php'});
   break;
    case 'http://www.joyforchild.com/ice/flexi.php?vid='+arr:
  _this.addButtonClicked.notify({url:'flexi.php'});
   break;
    case 'http://www.joyforchild.com/ice/flexi-tovari.php?q='+arrr+'&vvv='+arrr_s:
  _this.addButtonClicked.notify({url:'flexi-tovari.php'});
   break;
    case 'http://www.joyforchild.com/ice/get_flexi_one.php?q='+id_for_fl_one:
  _this.addButtonClicked.notify({url:'get_flexi_one.php'});
   break;
   }
}
	
_this._elements.addButton.on( "click", function(e) {
e.preventDefault;
 e.stopPropagation();
 if(window.location!='http://www.joyforchild.com/ice/dog_main.php'){
 history.pushState('http://www.joyforchild.com/ice/dog_main.php', document.title, 'http://www.joyforchild.com/ice/dog_main.php');}
 _this.addButtonClicked.notify({url:'dog_main.php'});
return false;
 });	
  //==============================flexi=============================*******************************************
$("body" ).on( "click", '.dog_flexi', function(e) {
var _thiss=this;
url_for_flexi=_thiss.getAttribute('data-param');
arr=_thiss.getAttribute('data-vid');
	e.preventDefault;
    e.stopPropagation();
   if(window.location!='http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid')){
  history.pushState('http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid'), document.title, 'http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid'));}
	_this.addButtonClicked.notify({url:url_for_flexi});
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
	_this.addButtonClicked.notify({url:addtocart});
	return false;
 });	
  //----------------flexi-tov---------------------
$("body" ).on( "click", '.flexi-tov', function(e) {
//_this._elements.flexi_tov.on( "click", function(e) {
var _thiss=this;
arf=_thiss.getAttribute('data-param');
arrr=_thiss.getAttribute('data-brend');
arrrv=_thiss.getAttribute('data-v');
arrr_s=_thiss.getAttribute('data-ses');
console.log(arf);
	e.preventDefault;
    e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')){
  history.pushState('http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'), document.title, 'http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'));}
	_this.addButtonClicked.notify({url:arf});
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
	_this.addButtonClicked.notify({url:arfa});
	return false;
 });
}
//====================================================================================================================================
ListView.prototype = {
	innnn: function () { 
	   this.rebuildList('#index');
    },
	
    rebuildList: function (id) { //сюда handlebars js
		check ();
        var list, items, key;
        list = this._elements.list; 
//-----------------------------------------------------------------------------------------------
var source = $(id).html();	   
var template = Handlebars.compile(source);
items= this._model.getItems();
var htmll = template(items);
$(htmll).insertAfter(list);	
//--------------------
	//model_state.flexitov=items;
		//console.log(model_state);
    }	
};

/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
function ListController(modell, vieww) {
    this._model = modell;
    this._view = vieww;
    var _this = this;
	
    this._view.addButtonClicked.attachd(function () {
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

$(function () {
    var model = new ListModel('{ "employees" : "jjj"}');
        view = new ListView(model, {
            'list': $('header'),
		    'addButton': $(".dog_main") ,
			 'flexi_tov': $('.flexi-tov') 
        });
history.pushState('http://www.joyforchild.com/ice/flexi.php'+window.location.search, document.title, 'http://www.joyforchild.com/ice/flexi.php'+window.location.search);
new ListController(model, view);
  
});
