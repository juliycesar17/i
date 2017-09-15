//-----------------VIEW---------------------------------------------------------------------------------------------------------------------------
function ListViewcart() {
  ListViewParent.apply(this, Array.prototype.slice.call(arguments, 0));
    var _this = this;
  arguments[0].browsedataforshop.attachd(function () {
	var rendering;
	switch (arguments[1].elem) {
	case 'add_tocart_n.php':
	rendering ='#addtocart';
	return  _this.rebuildList(rendering);
	break;
	case 'cart.php':
	rendering ='#carttt';
	 return  _this.rebuildview(rendering);
	break;
	}
 });
 //=============cart============
	arguments[0].cart.attachd(function () {
		console.log(arguments);
		var arg3={};
	arg3.title=arguments[1].title;
  console.log(arg3);
	return  _this.rebuildList('#carttt', '#title', arg3);
	});
//=============addqty============
	arguments[0].addqty_model.attachd(function () {
    console.log(arguments);
    var arg3={};
	arg3.title=arguments[1].title;
  console.log(arg3);
	return  _this.rebuildList('#carttt','#title', arg3);
	});
//===========removeqty===========
arguments[0].removeqty_model.attachd(function () {
  var arg3={};
arg3.title=arguments[1].title;
console.log(arg3);
return  _this.rebuildList('#carttt','#title', arg3);
	});
}
ListViewcart.prototype = Object.create(ListViewParent.prototype);
  ListViewcart.prototype.constructor = ListViewcart;
  ListViewcart.prototype.rebuildview= function (id) { //сюда handlebars js
		check ();
        var list, items, key;
        list = this._elements.list;
//-----------------------------------------------------------------------------------------------
var source = $(id).html();
var template = Handlebars.compile(source);
items= this._model.cartt();
var htmll = template(items);
$(htmll).insertAfter(list);
}
