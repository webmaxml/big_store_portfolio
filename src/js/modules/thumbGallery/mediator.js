// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function Mediator() {
	_.extend( this, Backbone.Events );
};

Mediator.prototype.setActive = function( number ) {
	this.trigger( 'activeChange', number - 1 );
};

module.exports = Mediator;