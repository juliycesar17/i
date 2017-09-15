$(function () {
	var ui=$.parseJSON('{ "reklama" : "МОРОЖЕНОЕ"}');
    var model = new ListModel(ui);
        view = new ListView(model, {
            'list': $('header'),
		    'addButton': $(".dog_main")
        });
		history.pushState('http://www.joyforchild.com/ice/index.php', document.title, 'http://www.joyforchild.com/ice/index.php');
new ListController(model, view);
    view.innnn();
	//new ListController_cart (model, view);
	
	
});