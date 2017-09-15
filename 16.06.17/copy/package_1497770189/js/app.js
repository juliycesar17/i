
//$(function () {
history.pushState('http://www.joyforchild.com/ice/index.php', document.title, 'http://www.joyforchild.com/ice/index.php');

var ui=$.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
var modelcart = new ListModelcart(ui);
var modellogin = new ListModellogin(ui);	
var model = new ListModelshop(ui,modelcart, modellogin );
var view = new ListViewshop(model, {
  'list': $('header'),
  'addButton': $(".dog_main"),
  'title':$("head")
}); 		 
var viewcart = new ListViewcart(modelcart, {
            'list': $('header'),
		    'addButton': $(".dog_main")
});
	
var viewlogin = new ListViewLogin(modellogin, {
            'list': $('header'),
		    'addButton': $(".dog_main")
});
new ListControllershop(model, view);
new ListControllercart(modelcart, viewcart);
new ListControllerlogin(modellogin, viewlogin);

view.nnnn();			
//});



