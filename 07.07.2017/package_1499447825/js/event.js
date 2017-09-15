function Event(sender) {
   this._sender = null;
    this._sender = sender;
    this._listeners = []; //ПОДПИСЧИКИ-КОЛБЭКИ!!!!!
}
//---------------------------------------------------------------------------------------------------------------
Event.prototype = {
    attachd: function (listener) { // у new Event будет ф-ия attachd , добавляющая новый коллбэк в массив
		this._listeners.push(listener);
    },
    notify: function (args) {
                for ( var i = 0; i < this._listeners.length; i += 1) { //для каждого коллбэка
            this._listeners[i]( this._sender,args); //запускается каждый коллбэк c аргументами args
			//this._listeners[i].call( arguments);
			console.log(this._sender);
        }
    }
};
