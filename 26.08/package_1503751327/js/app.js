if (window.location.href =='http://www.joyforchild.com/ice/' ) {
history.pushState('http://www.joyforchild.com/ice/index.php', document.title, 'http://www.joyforchild.com/ice');
} else {
  history.pushState('http://www.joyforchild.com/ice/index.php', document.title, 'http://joyforchild.com/ice');
}
var ui=$.parseJSON('{ "reklama" : "МОРОЖЕНОЕ", "title":"главная страница"}');
var modelcart = new ListModelcart(ui);
var modellogin = new ListModellogin(ui);
var model = new ListModelshop(ui,modelcart, modellogin );
var view = new ListViewshop(model, {
  'list': $('header'),
  'addButton': $(".shop"),
  'title':$("head")
});
var viewcart = new ListViewcart(modelcart, {
            'list': $('header'),
		    'addButton': $(".shop")
});

var viewlogin = new ListViewLogin(modellogin, {
            'list': $('header'),
		    'addButton': $(".shop")
});
new ListControllershop(model, view);
new ListControllercart(modelcart, viewcart);
new ListControllerlogin(modellogin, viewlogin);
view.nnnn();
