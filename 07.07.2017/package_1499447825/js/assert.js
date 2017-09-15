var assert = function(value, msg) {
if(!value) throw(msg || value + "does not equivalent true");
}

var assertequal = function(value1, value2, msg) {
if(value1!==value2) throw(msg || value1 + "does not equivalent"+ value2");
}
