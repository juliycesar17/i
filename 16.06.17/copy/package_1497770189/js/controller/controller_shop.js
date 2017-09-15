function ListControllershop() {    
  ListControllerParent.apply(this, Array.prototype.slice.call(arguments, 0));
  var _this=this;
 //-------------------------------------------------------------------------
  arguments[1].browseshop.attachd(function () {
	console.log(arguments);  
	var id=arguments[1].id;
	var vid=arguments[1].flex;   
	var ddd=arguments[1];
	var title=arguments[1].title;
	console.log(arguments[1].title);
	_this.addItem(ddd);
   });
 //=========================================
$("body" ).on( "click", '#ind', function(e) {
  var _thiss=this;
  e.preventDefault();
  e.stopPropagation();
  var ui=$.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
 var items=ui ;
  if(window.location!='http://www.joyforchild.com/ice/index.php'){
  history.pushState('http://www.joyforchild.com/ice/index.php', document.title, 'http://www.joyforchild.com/ice/index.php');}
  _this._view.browseshop.notify({url:'indexx.php', 'title':'главная страница', items:items/*, brend:'arrr', vidd:'arrrv'*/});
 });
//------------------------------------------
arguments[1]._elements.addButton.on( "click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/dog_main.php'){
  history.pushState('http://www.joyforchild.com/ice/dog_main.php', document.title, 'http://www.joyforchild.com/ice/dog_main.php');}
  _this._view.browseshop.notify({url:'dog_main.php','title':'browseshop'});
}); 
//==========================recipe=================
$("body" ).on( "click", '#recipe', function(e) {
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/recipe.php'){
  history.pushState('http://www.joyforchild.com/ice/recipe.php', document.title, 'http://www.joyforchild.com/ice/recipe.php');}
  _this._view.browseshop.notify({url:'recipe.php','title':'recipe'});
}); 

 //-----------------------------------------------------
$("body" ).on( "click", '.dog_flexi', function(e) {
  var _thiss=this;
  var param_for_flexi_vid;
  var url_for_flexi;
   localStorage.setItem('param_for_flexi_vid', _thiss.getAttribute('data-vid'));
   localStorage.setItem('url_for_flexi',        _thiss.getAttribute('data-param') );
  var url_vid=localStorage.getItem('url_for_flexi');
  var vid_vid=localStorage.getItem('param_for_flexi_vid');
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid')){
  history.pushState('http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid'), document.title, 'http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid'));}
  _this._view.browseshop.notify({url:url_vid, flex:vid_vid, 'title':'brows_items'}); //2 параметр для кеширования
});
 //-----------------------------------------------------
$("body" ).on( "click", '#blog', function(e) {
  var _thiss=this;
  var param_for_flexi_vid;
  var url_for_blog;
   localStorage.setItem('url_for_blog',     _thiss.getAttribute('data-param') );
  var url_vid=localStorage.getItem('url_for_blog');
  
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/blog_n.php'){
  history.pushState('http://www.joyforchild.com/ice/blog_n.php', document.title, 'http://www.joyforchild.com/ice/blog_n.php');}
  _this._view.browseshop.notify({url:url_vid}); //2 параметр для кеширования
});
//----------------flexi-tov---------------------
$("body" ).on( "click", '.flexi-tov', function(e) {
  var _thiss=this;
  var url_for_flexi_one, arrr, arrrv, arrr_s;
  localStorage.setItem('url_for_flexi_one', _thiss.getAttribute('data-param'));
  localStorage.setItem('arrr', _thiss.getAttribute('data-brend'));
  localStorage.setItem('arrrv', _thiss.getAttribute('data-v'));
  localStorage.setItem('arrr_s', _thiss.getAttribute('data-ses'));
  
   var url_tovari=localStorage.getItem('url_for_flexi_one');
   var brend_brend=localStorage.getItem('arrr');
   var vid_vid_vid=localStorage.getItem('arrrv');
   var ses_ses_ses=localStorage.getItem('arrr_s');
   e.preventDefault();
   e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')){
  history.pushState('http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'), document.title, 'http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'));}
  _this._view.browseshop.notify({url:url_tovari, brend:brend_brend, vidd:vid_vid_vid,'title':'brows_items' });
});
//-----------------------------------------------
$("body" ).on( "click", '.flex_f_one', function(e) {
  var _thiss=this;
  var url_one, id_one;
  
  localStorage.setItem('url_one', _thiss.getAttribute('data-param'));
  localStorage.setItem('id_one', _thiss.getAttribute('data-idd'));
  
  var url_one_one=localStorage.getItem('url_one');
  var id_one_one=localStorage.getItem('id_one');
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/get_flexi_one.php?q='+$(this).attr('data-idd')){
  history.pushState('http://www.joyforchild.com/ice/get_flexi_one.php?q='+$(this).attr('data-idd'), document.title, 'http://www.joyforchild.com/ice/get_flexi_one.php?q='+$(this).attr('data-idd'));}
  _this._view.browseshop.notify({url:url_one_one, id:id_one_one,'title':'brows_item_one'});
});
}
ListControllershop.prototype = Object.create(ListControllerParent.prototype); 
ListControllershop.prototype.constructor = ListControllershop;