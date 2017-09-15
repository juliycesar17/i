function ListControllershop() {
   ListControllerParent.apply(this, Array.prototype.slice.call(arguments, 0));
   var _this=this;
   //------------------
  arguments[1].browseshop.attachd(function () {
	var id=arguments[1].id;
	var vid=arguments[1].flex;
	var ddd=arguments[1];
	var title=arguments[1].title;
	_this.addItem(ddd);
   });
 //=========
$("body" ).on( "click", '#ind', function(e) {
    var _thiss=this;
    e.preventDefault();
    e.stopPropagation();
    var ui=$.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
   var items=ui ;
  if(window.location!='http://www.joyforchild.com/ice'){
  history.pushState('http://www.joyforchild.com/ice/index.php', document.title, 'http://www.joyforchild.com/ice/.');}
  _this._view.browseshop.notify({url:'indexx.php', 'title':'главная страница', items:items/*, brend:'arrr', vidd:'arrrv'*/});
 });
//------------------------------------------
arguments[1]._elements.addButton.on( "click", function(e) {
  console.log(window.location.origin);
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/shop' && window.location!='http://joyforchild.com/ice/shop' ){
    if(window.location.origin=='http://www.joyforchild.com') {
  history.pushState('http://www.joyforchild.com/ice/shop', document.title, 'http://www.joyforchild.com/ice/shop');}
 else {history.pushState('http://www.joyforchild.com/ice/shop', document.title, 'http://joyforchild.com/ice/shop');}
}
  _this._view.browseshop.notify({url:'shop.php','title':'browseshop'});
});
//==========================recipe=================
$("body" ).on( "click", '#recipe', function(e) {
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/recipe.php' && window.location!='http://joyforchild.com/ice/recipe.php'  ){
    if(window.location.origin=='http://www.joyforchild.com') {
  history.pushState('http://www.joyforchild.com/ice/recipe.php', document.title, 'http://www.joyforchild.com/ice/recipe.php');}
 else {  history.pushState('http://www.joyforchild.com/ice/recipe.php', document.title, 'http://joyforchild.com/ice/recipe.php');}
}
  _this._view.browseshop.notify({url:'recipe.php','title':'recipe'});
});

 //-----------------------------------------------------
$("body" ).on( "click", '.sel_cat', function(e) {
  var _thiss=this;
  var param_for_flexi_vid;
  var url_for_flexi;
   localStorage.setItem('param_for_flexi_vid', _thiss.getAttribute('data-vid'));
   localStorage.setItem('url_for_flexi',        _thiss.getAttribute('data-param') );
  var url_vid=localStorage.getItem('url_for_flexi');
  var vid_vid=localStorage.getItem('param_for_flexi_vid');
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/select-cat' && window.location!='http://joyforchild.com/ice/select-cat'){
    if(window.location.origin=='http://www.joyforchild.com'){
  history.pushState('http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid'), document.title, 'http://www.joyforchild.com/ice/select-cat');}
  else {  history.pushState('http://www.joyforchild.com/ice/flexi.php?vid='+$(this).attr('data-vid'), document.title, 'http://joyforchild.com/ice/select-cat');}
}
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
  if(window.location!='http://www.joyforchild.com/ice/blog_n.php' && window.location!='http://joyforchild.com/ice/blog_n.php' ){
    if(window.location.origin=='http://www.joyforchild.com'){
  history.pushState('http://www.joyforchild.com/ice/blog_n.php', document.title, 'http://www.joyforchild.com/ice/blog_n.php');}
  else {history.pushState('http://www.joyforchild.com/ice/blog_n.php', document.title, 'http://joyforchild.com/ice/blog_n.php');}
}
  _this._view.browseshop.notify({url:url_vid}); //2 параметр для кеширования
});
//----------------flexi-tov---------------------
$("body" ).on( "click", '.choose-brend', function(e) {
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
  if(window.location!='http://www.joyforchild.com/ice/choose-brend' && window.location!='http://joyforchild.com/ice/choose-brend'){
    if(window.location.origin=='http://www.joyforchild.com'){
  history.pushState('http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'), document.title, 'http://www.joyforchild.com/ice/choose-brend');}
    else {history.pushState('http://www.joyforchild.com/ice/flexi-tovari.php?q='+$(this).attr('data-brend')+'&vvv='+$(this).attr('data-v'), document.title, 'http://joyforchild.com/ice/choose-brend');}
}
  _this._view.browseshop.notify({url:url_tovari, brend:brend_brend, vidd:vid_vid_vid,'title':'brows_items' });
});
//-----------------------------------------------
$("body" ).on( "click", '.one_ice', function(e) {
  var _thiss=this;
  var url_one, id_one;

  localStorage.setItem('url_one', _thiss.getAttribute('data-param'));
  localStorage.setItem('id_one', _thiss.getAttribute('data-idd'));

  var url_one_one=localStorage.getItem('url_one');
  var id_one_one=localStorage.getItem('id_one');
  e.preventDefault();
  e.stopPropagation();
  if(window.location!='http://www.joyforchild.com/ice/your-ice'){
  history.pushState('http://www.joyforchild.com/ice/get_flexi_one.php?q='+$(this).attr('data-idd'), document.title, 'http://www.joyforchild.com/ice/your-ice');}
  _this._view.browseshop.notify({url:url_one_one, id:id_one_one,'title':'brows_item_one'});
});
}
ListControllershop.prototype = Object.create(ListControllerParent.prototype);
ListControllershop.prototype.constructor = ListControllershop;
