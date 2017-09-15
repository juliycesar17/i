window.onpopstate=(function proxyy (){ return function(event, x) {
		 console.log(event.state);
   switch(event.state) {
	  
	case 'http://www.joyforchild.com/ice/index.php':
   x.nnnn();
   break;
   case 'http://www.joyforchild.com/ice/dog_main.php':
  x.addButtonClicked.notify({url:'dog_main.php'});
   break;
    case 'http://www.joyforchild.com/ice/flexi.php?vid='+param_for_flexi_vid:
  x.addButtonClicked.notify({url:'flexi.php'});
   break;
    case 'http://www.joyforchild.com/ice/flexi-tovari.php?q='+arrr+'&vvv='+arrr_s:
  x.addButtonClicked.notify({url:'flexi-tovari.php'});
   break;
    case 'http://www.joyforchild.com/ice/get_flexi_one.php?q='+id_for_fl_one:
  x.addButtonClicked.notify({url:'get_flexi_one.php'});
   break;
   }
}
}
)(event, ListViewshop.apply(this, Array.prototype.slice.call(arguments, 0)));