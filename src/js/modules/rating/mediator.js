// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function Mediator() {
	_.extend( this, Backbone.Events );

	// saving active star index
	this.activeIndex = null;

	this.on( 'hover', this.manageHover );
	this.on( 'unhover', this.manageUnhover );
};

Mediator.prototype.manageHover = function( index ) {
	this.trigger( 'manageFill', index );
};

Mediator.prototype.manageUnhover = function() {
	this.trigger( 'manageFill', this.activeIndex );
};

Mediator.prototype.setRating = function( rating ) {
	this.activeIndex = rating - 1;
	this.trigger( 'manageFill', rating - 1 );
};


module.exports = new Mediator;