// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );
var globalMediator = require( '../../mediator' );

function Mediator() {
	_.extend( this, Backbone.Events );
	this.global = globalMediator;

	this.on( 'document:mouseup', this.notifyMouseup );
};

Mediator.prototype.notifyMouseup = function( event ) {
	this.global.trigger( 'global:mouseup', event );
};


module.exports = Mediator;