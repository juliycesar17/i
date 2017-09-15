
function ListViewshop() {
  ListViewParent.apply(this, Array.prototype.slice.call(arguments, 0));
  var _this = this;
  console.log(arguments);
 /* arguments[0].logintempl.attachd(function () {
	  console.log(arguments);
  });*/
  console.log(arguments);
  arguments[0].browsedataforshop.attachd(function () {
  var rendering;
	switch (arguments[1].elem) {

	case 'indexx.php':
	console.log(arguments);
	var arg3={};
	arg3.title=arguments[1].title;
	rendering ='#index';
	return  _this.rebuildList(rendering, '#title', arg3, '#auth');
	break;
	case 'shop.php':
	console.log(arguments[1].title);
	rendering ='#dogm';
	var arg3={};
	arg3.title=arguments[1].title;

	return  _this.rebuildList(rendering,'#title', arg3);
	break;
	case 'blog_n.php':
	rendering ='#blog_templ';
	var arg3={};
	arg3.title=arguments[1].title;
	return  _this.rebuildList(rendering,'#title', arg3);
	break;
	case 'recipe.php':
	rendering ='#recipes';
	var arg3={};
	arg3.title=arguments[1].title;
	return  _this.rebuildList(rendering,'#title', arg3);
	break;
	case 'select-cat.php':
	rendering ='#flexxxi';
	var arg3={};
	arg3.title=arguments[1].title;
	return  _this.rebuildList(rendering,'#title', arg3);
	break;
	case 'choose-brend.php':
	rendering ='#flexi-for-tov';
	var arg3={};
	console.log(arguments[1].title);
	arg3.title=arguments[1].title;
	return  _this.rebuildList(rendering,'#title', arg3);
	break;
	case 'your-ice.php':
	rendering ='#flexi-one';
	var arg3={};
	arg3.title=arguments[1].title;
	var id=arguments[1].id;
	if(arguments[1].id.added) console.log(arguments[1].id.added);
	return  _this.rebuildList(rendering,'#title'/*, id*/, arg3);
	break;
	}
    });

	//================history api=============//
    window.onpopstate=function(event) {
      console.log(event.state);
		 var param_for_flexi_vid=localStorage.getItem('param_for_flexi_vid');
		 //---
		 var url_tovari=localStorage.getItem('url_for_flexi_one');
         var brend_brend=localStorage.getItem('arrr');
         var vid_vid_vid=localStorage.getItem('arrrv');
		 var ses_ses_ses=localStorage.getItem('arrr_s');

		  var id_one_one_one=localStorage.getItem('id_one');
   switch(event.state) {
	case 'http://www.joyforchild.com/ice/index.php' || 'http://joyforchild.com/ice/index.php':
  console.log(event.state);
   _this.nnnn();
   break;

   case 'http://www.joyforchild.com/ice/shop' ||'http://joyforchild.com/ice/shop':
  _this.browseshop.notify({url:'shop.php','title':'browsershop'});
   break;
   case 'http://www.joyforchild.com/ice/recipe.php':
  _this.browseshop.notify({url:'recipe.php'});
   break;
   case 'http://www.joyforchild.com/ice/flexi.php?vid='+param_for_flexi_vid:
  _this.browseshop.notify({url:'select-cat.php',  flex:param_for_flexi_vid});
   break;
   case 'http://www.joyforchild.com/ice/flexi-tovari.php?q='+brend_brend+'&vvv='+ses_ses_ses:
  _this.browseshop.notify({url:'choose-brend.php', brend:brend_brend, vidd:ses_ses_ses,'title':'browse_items'});
   break;
   case 'http://www.joyforchild.com/ice/get_flexi_one.php?q='+id_one_one_one:
  _this.browseshop.notify({url:'your-ice.php', id:id_one_one_one});
   break;
   }
 }
}
ListViewshop.prototype = Object.create(ListViewParent.prototype);
	   ListViewshop.prototype.constructor = ListViewshop;
	   console.log(ListViewshop.prototype);
