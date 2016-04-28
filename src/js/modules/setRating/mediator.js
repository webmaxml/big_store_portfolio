// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function Mediator() {
	_.extend( this, Backbone.Events );

	// caching active value
	this.activeValue = null;

	this.on( 'activeChange', this.manageActive );
	this.on( 'hover', this.manageHover );
	this.on( 'unhover', this.manageUnhover );
};

Mediator.prototype.manageActive = function( value ) {
	this.activeValue = value;
	this.trigger( 'manageActiveChange', value );
};

Mediator.prototype.manageHover = function( value ) {
	this.trigger( 'manageActiveChange', value );
};

Mediator.prototype.manageUnhover = function() {
	this.trigger( 'manageActiveChange', this.activeValue );
};


module.exports = Mediator;