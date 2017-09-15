function ListViewParent() {
  this._model =  arguments[0];
  this._elements = arguments[1];
  this.browseshop = new Event(this);
  this.addButtonClickedtocart = new Event(this);
  this.formForlogin = new Event(this);
  this.formForregistr = new Event(this);
  this.formForsendregistr = new Event(this);
  this.cartclcik = new Event(this);
  this.add_qty = new Event(this);
  this.remove_qty = new Event(this);
}

ListViewParent.prototype.nnnn = function iii() {
  var ui=$.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
  var items=ui ;
  this.rebuildList('#index','#title',items );
}

ListViewParent.prototype.rebuildList= function (id,id2, itemss, auth) {
  arguments[1]=arguments[1]|| {'uu':'uu'}
  check ();
  var list, items, key, title;
  list = this._elements.list;
  title = this._elements.title;
  //---------------------------------
  var source = $(id).html();
        if ( id2 ) { var source2 = $(id2).html();
         var template2 = Handlebars.compile(source2);
  }
  //---------------------------------
      if ( auth ) { var source3 = $(auth).html();
    var template3 = Handlebars.compile(source3);
    var htmll3 = template3(obj);
	  var ell=$('#mmm');
    $(htmll3).insertAfter(ell);
  }
  //-------------------------------
  var template = Handlebars.compile(source);
  items=itemss;
  var obj={};
	obj.title=items.title;
	var htmll2 = template2(obj);
  $('title').remove();
  $(title).append(htmll2);
  //----------------------------------
  items2= this._model.getItems();
  var htmll = template(items2);
  $(htmll).insertAfter(list);
}
