// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function Mediator() {
	_.extend( this, Backbone.Events );
};

Mediator.prototype.setCurrency = function( curr ) {
	this.trigger( 'setCurrency', curr );
};

module.exports = new Mediator;