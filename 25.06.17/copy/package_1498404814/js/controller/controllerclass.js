function ListControllerParent() {
    this._model = arguments[0];
    this._view =  arguments[1];
	this.ard= arguments[2]||'{prop:prop}';
	console.log(arguments);	
}

ListControllerParent.prototype.addItem =  function () {
	    var _this=this;
		console.log(this); 
		var argos=arguments;
		console.log(argos[0]);
		var el=arguments[0].url;
		var title=arguments[0].title;
		return this._model.ajax(argos[0]).then(function(msg){
        console.log(msg);			
		return _this._model.addItem(msg, el, title)});		
}

