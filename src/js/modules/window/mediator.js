// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );
var globalMediator = require( '../../mediator' );

function Mediator() {
	_.extend( this, Backbone.Events );
	this.global = globalMediator;

	this.on( 'window:resize', this.manageResize );
};

Mediator.prototype.manageResize = function( event ) {
	this.global.trigger( 'global:resize', event );
};

module.exports = Mediator;