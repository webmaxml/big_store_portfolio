// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );
var globalMediator = require( '../../mediator' );

function Mediator() {
	_.extend( this, Backbone.Events );
	this.global = globalMediator;

	this.listenTo( this.global, 'global:resize', this.manageResize );
};

Mediator.prototype.manageResize = function( event ) {
	this.trigger( 'window:resize', event );
};

module.exports = Mediator;