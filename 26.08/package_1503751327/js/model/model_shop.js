
 function ListModelshop() {
  ListModelParent.apply(this, Array.prototype.slice.call(arguments, 0));
 this.answerToAdd = new Event(this);
  this.modelcarttt=arguments[1];
   var _this=this;

arguments[1].itemAddCart.attachd(function () {
  console.log(arguments);
	 var argus=arguments[1].not[0];
   var title=arguments[1].not[4];
	 console.log( _this._itttems);
	 _this._itttems['your-ice.php-'+argus].added='true';
	 return _this.ajax({url:'your-ice.php', id:argus}).then(function(msg){
	   return _this.addItem(msg, 'your-ice.php',title)});	;
  });
  //===================
  arguments[2].logintempl.attachd(function () {
	 console.log(arguments);
	 if(arguments[0]._ittttems['add_user.php']){ var authvar=arguments[0]._ittttems['add_user.php'].ppp.scs;
	  console.log(authvar);}
	  _this._itttems['auth']=authvar;
  });
}

ListModelshop.prototype = Object.create(ListModelParent.prototype);
	   ListModelshop.prototype.constructor = ListModelshop;
	   console.log(ListModelshop.prototype);

ListModelshop.prototype.getown= function ( ) {
	return this.own;
};
