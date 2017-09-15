 function ListControllerlogin() {
  ListControllerParent.apply(this, Array.prototype.slice.call(arguments, 0));
  var _this=this;
//========================================
 arguments[1].formForlogin.attachd(function () {
	console.log(arguments);
	var viewV=arguments[0];
	var ddd=arguments[1];
	_this.addItemlogin(ddd);
  });
 //==================================
 arguments[1].formForregistr.attachd(function () {
	console.log(arguments);
	var viewV=arguments[0];
	var ddd=arguments[1];
	_this.addItemlogin(ddd);
  });
   //==================================
 arguments[1].formForsendregistr.attachd(function () {
	console.log(arguments);
	var viewV=arguments[0];
	var ddd=arguments[1];
	_this.addItemlogin(ddd);
  });
 //========================================
$("#mmm" ).on( "click", '#login_purpose', function(e) {
	alert("jjjj");
	  if(window.location!='http://www.joyforchild.com/ice/login.php'){
  history.pushState('http://www.joyforchild.com/ice/login.php', document.title, 'http://www.joyforchild.com/ice/login.php');}
  var _thiss=this;
  var url_for_login;
  localStorage.setItem('url_for_login', _thiss.getAttribute('data-param'));

  var ls_url_for_login=localStorage.getItem('url_for_login');
  e.preventDefault();
  e.stopPropagation();
	_this._view.formForlogin.notify({url:ls_url_for_login});
 });
//--------------------
$(".w3-main" ).on( "click", '#for_registr_id', function(e) {
	alert("jjjj");
	  if(window.location!='http://www.joyforchild.com/ice/registr.php'){
  history.pushState('http://www.joyforchild.com/ice/registr.php', document.title, 'http://www.joyforchild.com/ice/registr.php');}
  var _thiss=this;
  var url_for_registr;
  localStorage.setItem('url_for_rgistr', _thiss.getAttribute('data-param'));

  var ls_url_for_registr=localStorage.getItem('url_for_rgistr');
  e.preventDefault();
  e.stopPropagation();
	_this._view.formForregistr.notify({url:ls_url_for_registr});
 });
//============================================
$(".w3-main" ).on( "submit", '#form2', function(e) {
alert("aaaaa");
  var _thiss=this;
  localStorage.setItem('url_send_registr', _thiss.getAttribute('data-param'));
  //---------------------------------------------------------------------
    var em=$('input[name="email"]').val();
    console.log(em);
    var passw=jQuery('input[name="passw"]').val();
    console.log(passw);
  //=====================================================
  localStorage.setItem('email_send_registr', em);
  localStorage.setItem('passw_send_registr', passw);
  //----------------------------------------------------------
  var ls_url_send_registr=localStorage.getItem('url_send_registr');
  var ls_email_send_registr=localStorage.getItem('email_send_registr');
  var ls_passw_send_registr=localStorage.getItem('passw_send_registr');
 e.preventDefault();
  e.stopPropagation();
_this._view.formForsendregistr.notify({url:ls_url_send_registr,email:ls_email_send_registr ,passw:ls_passw_send_registr});
 });
}
ListControllerlogin.prototype = Object.create(ListControllerParent.prototype);
ListControllerlogin.prototype.constructor = ListControllerlogin;


ListControllerlogin.prototype.login =  function () {
  var _this=this;
  var eee=arguments;
  return this._model.ajax(eee).then(function(msg){
  console.log(_this._model);
	//return _this._model.login(msg, 'login.php')
	});
}

ListControllerParent.prototype.addItemlogin =  function () {
	    var _this=this;
		console.log(this);
		var argos=arguments;
		console.log(argos[0]);
		var el=arguments[0].url;
		return this._model.ajax(argos[0]).then(function(msg){
        console.log(msg);
		return _this._model.addItemlogin(msg, el)});
}
