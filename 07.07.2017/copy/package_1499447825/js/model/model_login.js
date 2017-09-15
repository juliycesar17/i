 function ListModellogin() { 
  ListModelParent.apply(this, Array.prototype.slice.call(arguments, 0));
  this._ittttems={};
  this.logintempl=new Event(this);
 }
 ListModellogin.prototype = Object.create(ListModelParent.prototype); 
	   ListModellogin.prototype.constructor = ListModellogin;
	   console.log(ListModellogin.prototype);

		
ListModelParent.prototype.addItemlogin= function ( ) {
	console.log( arguments);
	          this._elem=arguments[1];              
			  this._items=arguments[0];
			
			    this._ittttems[this._elem.toString()]=this._items;
				console.log( this._ittttems);
				
                this.logintempl.notify({				
                elem: arguments[1],
			    id:arguments[0]
                });
}
//====================================
ListModelParent.prototype.addItemregistr= function ( ) {
	console.log( arguments);
	          this._elem=arguments[1];              
			  this._items=arguments[0];
			
			    this._ittttems[this._elem.toString()]=this._items;
				console.log( this._ittttems);
				
                this.logintempl.notify({				
                elem: arguments[1],
			    id:arguments[0]
                });
}