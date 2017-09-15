
//==================
var url_for_flexi;
var url_for_flexi_one;  
var param_for_flexi_vid;
var arrr;
var arrr_s;
var arfa;
var id_for_fl_one;
var arrrv;
var iddd;
var tl;
var im;
var pr;
var addtocart;
var cart;
var for_post_cart;
//не перенести ли это все в модель или представление через this?.....
var basket=[];

 var model_state={};
 var indexes=[];
 
$(function () {
	var ui=$.parseJSON('{ "reklama" : "МОРОЖЕНОЕ"}');
    var model = new ListModel(ui),
        view = new ListView(model, {
            'list': $('header'),
		    'addButton': $(".dog_main")
        });
		history.pushState('http://www.joyforchild.com/ice/index.php', document.title, 'http://www.joyforchild.com/ice/index.php');
new ListController(model, view);
console.log(view);
view.nnnn();			
});



