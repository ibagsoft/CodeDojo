var a = 45;
var func = function(c) {
	var b = 78;
	return function() {
		return b + c;
	};
};
var r = func(5);
console.log(r());