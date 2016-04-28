// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function Mediator() {
	_.extend( this, Backbone.Events );
};

Mediator.prototype.setRating = function( value ) {
	var index = value - 1;
	this.trigger( 'setRating', index );
};

module.exports = Mediator;