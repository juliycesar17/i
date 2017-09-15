Handlebars.registerHelper('help', function() {
  console.log(this);
 // var output;
  //if(this.hasOwnProperty('added')) {this.resppp[0].add='<em>в корзине</em>';   output=this.resppp[0].add;} 
  //else {this.resppp[0].add='<em>добавить в корзину</em>';   output=this.resppp[0].add;} ;
 
 // return new Handlebars.SafeString(output);
 if(this.hasOwnProperty('added')) {this.resppp[0].add='в корзине';} else {this.resppp[0].add='добавить в корзину'; }
});