// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function Mediator() {
	_.extend( this, Backbone.Events );

	this.on( 'activeChange', this.manageStateChange);
};

Mediator.prototype.manageStateChange = function( index ) {
	this.trigger( 'discardState', index );
};

module.exports = new Mediator;