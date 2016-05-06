// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );
var globalMediator = require( '../../mediator' );

function Mediator() {
	_.extend( this, Backbone.Events );
	this.global = globalMediator;

	this.listenTo( this.global, 'global:resize', this.notifyResize );
	this.listenTo( this.global, 'global:mouseup', this.notifyMouseup );
	this.listenTo( this.global, 'global:mousemove', this.notifyMousemove );
};

			/**************************
			 *      Global events     *
			 **************************/

Mediator.prototype.notifyResize = function( event ) {
	this.trigger( 'window:resize', event );
};

Mediator.prototype.notifyMouseup = function( event ) {
	this.trigger( 'document:mouseup', event );
};

Mediator.prototype.notifyMousemove = function( event ) {
	this.trigger( 'document:mousemove', event );
};

module.exports = Mediator;