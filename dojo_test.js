var assert = require('assert'),
	should = require('should'),
	dojo = require('./dojolite');

describe('dojoLite framework', function() {
	var Product;
	beforeEach(function() {
		Product = dojo.declare("Product", null, {
			constructor: function(price) {
				this.price = price;
			},
			getPrice: function() {
				return this.price;
			}
		});
	});
	it('必须要有类', function() {
		var product = new Product(33);
		product.getPrice().should.eql(33);
	});
	describe('继承体系', function() {
		it('要有继承', function() {
			var Book = dojo.declare('Book',Product,{
				getAuthor:function() {
					return "JSCook";
				}
			});
			var jsCook = new Book();
			jsCook.should.have.property('getPrice');
			jsCook.getAuthor().should.eql('JSCook');
		});
	});
});