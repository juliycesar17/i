 function ListModelcart() {
  ListModelParent.apply(this, Array.prototype.slice.call(arguments, 0));
  this.itemAddCart = new Event(this);
    this.addqty_model = new Event(this);
	this.removeqty_model = new Event(this);
  this.ittems={};
 }
 ListModelcart.prototype = Object.create(ListModelParent.prototype);
	   ListModelcart.prototype.constructor = ListModelcart;
	   console.log(ListModelcart.prototype);

ListModelcart.prototype.addtocartt=function( ){
console.log(arguments)	;
			this.ittems[arguments[0]]={'idq':arguments[0], 'vid':arguments[1], 'price':arguments[2], 'img':arguments[3]};
			this.ittems[arguments[0]].qty=1;
			this.itemAddCart.notify({
				not:arguments
             });
		}

ListModelcart.prototype.cartt=function( ){
	console.log(arguments);
			 this._items=arguments[0];
			 console.log(this._items);
			  this.cart.notify({
              elem: arguments[1],
			  id:arguments[0],
			  title: arguments[2]
			  })
             }
//--------------add_qty============
ListModelcart.prototype.add_qnty=function( ){
  console.log(arguments[0].title);
	        this._items=arguments[0].aa;
          var title=arguments[0].title;;
			for (var key in this._items){if (key==arguments[0].bb) {this._items[key].qty++;}}
			var tovari=this._items;
			this.addqty_model.notify({
				for_add:tovari,
        title:title
             });
 }
 //====================removeqty=================
 ListModelcart.prototype.remove_qnty=function( ){

	        this._items=arguments[0].aa;
			console.log(this._items);
			for (var key in this._items){if (key==arguments[0].bb) {this._items[key].qty--;}}
			console.log(this._items);
			var tovari=this._items;
			console.log(arguments);
			this.removeqty_model.notify({
				for_remov:tovari
             });
 }
ListModelcart.prototype.delfromcart= function ( ) {
		        console.log($.parseJSON(JSON.stringify(this.ittems)));
};
