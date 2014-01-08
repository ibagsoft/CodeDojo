/* Copyright (c) Licensed*/
var dojo = {
	declare:function(name,parent,options) {
		var klass = function() {
			if(typeof this.constructor === 'function')
				this.constructor.apply(this,arguments);
		};
		if(parent){
			var F = function() {};
			F.prototype = parent.prototype;
			klass.prototype = new F();
		}
		for(var p in options){
			klass.prototype[p] = options[p];
		}
		return klass;
	}
};

module.exports = dojo;