function ListModelParent() {
  this._itttems={};
  var _this=this;
  this.browsedataforshop = new Event(this);
  this.cart = new Event(this);
  this.logintempl=new Event(this);
}

ListModelParent.prototype.ajax =function ajax (){
	console.log(arguments);
	var _this=this;
  var title=arguments[0].title;
	if (arguments[0].urrrl && arguments[0].urrrl.url=='change_qty.php') {
	var addone=arguments[0].wwww[0][0]._model.ittems;
	var addoneid=arguments[0].wwww[0][1].id;
	return Promise.resolve( {'aa':addone, 'bb':addoneid, 'title':title}); //
	}
    if ( arguments[0].flex ){ console.log(arguments[0].flex);}
    var datta;
    var el=arguments[0].url;//*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if ( arguments[0].flex ) {var flex=arguments[0].flex;}
    if ( arguments[0].brend ) {var brend=arguments[0].brend; console.log(brend);}
    if ( arguments[0].vidd ) {var vidd=arguments[0].vidd; console.log(vidd); console.log(el+'-'+vidd +'-'+brend );}
    if ( arguments[0].id ) {var idd=arguments[0].id; console.log(idd); console.log(el+'-'+idd);}
    if ( arguments[0][1] && arguments[0][1]=='cart.php' ) {
		console.log(arguments[0]);
	 var myobj=arguments[0][0];
	 var array_of_items={};
        for (var item in myobj ){console.log(myobj[item]);
		array_of_items[item]=myobj[item];
  }
		return Promise.resolve(array_of_items);
}

  if ( arguments[0] && arguments[0].url=='login.php' ) {
   alert("priv");
   return Promise.resolve('priv');

  }

   if ( arguments[0] && arguments[0].url=='for_registr.php' ) {
   alert("for_registr");
   return Promise.resolve('priv');

  }

  if ( el in this._itttems || el+'-'+flex in this._itttems || el+'-'+vidd +'-'+brend in this._itttems || el+'-'+idd in this._itttems ){
	  alert("pppp");
   if(flex) {return Promise.resolve(_this._itttems[el.toString()+'-'+flex.toString()]);}
   else if(brend){ return Promise.resolve(_this._itttems[el.toString()+'-'+vidd.toString()+'-'+brend.toString()]);}
   else if(idd){return Promise.resolve(_this._itttems[el.toString()+'-'+idd.toString()]); }
   return Promise.resolve(_this._itttems[el.toString()]);
   } else {
    switch (el){
	   case  'indexx.php':
	   datta= {'indexx':'9'};
	   break;
	   case  'dog_main.php':
	   console.log(el);
	   datta= {'text':'6'};
	   break;
	   case  'recipe.php':
	   datta= {'text':'recipe'};
	   break;
	   case  'blog_n.php':
	   datta= {'text':'recipe'};
	   break;
	   case  'flexi.php' :
	   var param_for_flexi_vid=localStorage.getItem('param_for_flexi_vid');
	   datta={"vid":param_for_flexi_vid};
	   break;
	   case 'flexi-tovari.php':
	     var url_tovari=localStorage.getItem('url_for_flexi_one');
         var brend_brend=localStorage.getItem('arrr');
         var vid_vid_vid=localStorage.getItem('arrrv');
		 var ses_ses_ses=localStorage.getItem('arrr_s');
	   datta={"q":brend_brend, "vvv":vid_vid_vid};
	   break;
	   case 'get_flexi_one.php':
       var id_one_one=localStorage.getItem('id_one');
	   datta={"q":id_one_one};
	   break;
	   //-----------
	    case 'add_user.php':
       var send_one=localStorage.getItem('url_send_registr');
	          var em_one=localStorage.getItem('email_send_registr');
             var passw_one=localStorage.getItem('passw_send_registr');

	   datta={"q":send_one,"email":em_one ,"passw":passw_one};
	   break;
	   //--------------
	   case 'add_tocart_n.php' :

  var iddd_iddd_iddd=localStorage.getItem('iddd_iddd');
  var imagey_y=localStorage.getItem('image_image');
  var price_price_price=localStorage.getItem('price_price');
  var name_name_name=localStorage.getItem('name_item');
	   datta= {"q":iddd_iddd_iddd,"price1":price_price_price,"titl1":name_name_name,"img":imagey_y};
	   break;
	}

        return $.ajax({         //return Promise object
                 type: "POST",
                 url: el,
                 data: datta,
                 //cache: false,
                 dataType:'json',
                 beforeSend: function( xhr ) {
                 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                             }
                        });
  }
}

ListModelParent.prototype.addItem= function ( ) {
	console.log(arguments);
	          this._elem=arguments[1];
			  this._items=arguments[0];
			  if(arguments[0].ppp){ this.parammm=arguments[0].ppp;
			  this._itttems[this._elem.toString()+'-'+this.parammm.sess_vid]=this._items;
			   } else if (arguments[0].pp) {
				 this.parammmmmm=arguments[0].pp;
				 console.log( this.parammmmmm);
				 this._itttems[this._elem.toString()+'-'+this.parammmmmm.sess_vid+'-'+this.parammmmmm.sess_qqq]=this._items;
			 } else if (arguments[0].id) {
				 this.parammmmmmid=arguments[0].id;
				 this._itttems[this._elem.toString()+'-'+this.parammmmmmid.sess_one]=this._items;
			 } else {
			    this._itttems[this._elem.toString()]=this._items;
				console.log( this._itttems);
				}
                this.browsedataforshop.notify({
                elem: arguments[1],
			    id:arguments[0],
				title:arguments[2]
                });
}

ListModelParent.prototype.getItems= function ( ) {
	            console.log(this._items);
		        return this._items;
};
