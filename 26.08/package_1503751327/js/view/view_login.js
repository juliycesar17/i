//-----------------VIEW---------------------------------------------------------------------------------------------------------------------------
function ListViewLogin() {
  ListViewParent.apply(this, Array.prototype.slice.call(arguments, 0));   
    var _this = this;
    /*arguments[0].browsedataforshop.attachd(function () {
	var rendering;
	switch (arguments[1].elem) {		
	case 'login.php':
	rendering ='#for_login';
	return  _this.rebuildList(rendering);
	break;	
	}
 });*/
 //=============cart============
	arguments[0].logintempl.attachd(function () {
		console.log(arguments);
		 var rendering;
	switch (arguments[1].elem) {	
	case 'login.php':
	rendering ='#for_login';
	return  _this.rebuildview(rendering); 
	break;
	//------------------------------------
	case 'for_registr.php':
	rendering ='#for_registr';
	return  _this.rebuildview(rendering); 
	break;
	//------------------
	case 'add_user.php':
	rendering ='#success_registr';
	return  _this.rebuildview(rendering); 
	break;
	}
//	return  _this.rebuildview('#for_login');//*!!!!!!!!!!
	});

}
ListViewLogin.prototype = Object.create(ListViewParent.prototype); 
  ListViewLogin.prototype.constructor = ListViewLogin;
  ListViewLogin.prototype.rebuildview= function (id) { //сюда handlebars js
  alert("cccc");
		check ();
        var list, items, key;
        list = this._elements.list; 
//-----------------------------------------------------------------------------------------------
var source = $(id).html();	   
var template = Handlebars.compile(source);

items= this._model.getItems();
console.log(items);
var htmll = template(items);
$(htmll).insertAfter(list);	
}