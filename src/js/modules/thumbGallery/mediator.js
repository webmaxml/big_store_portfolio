// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function Mediator() {
	_.extend( this, Backbone.Events );
	
	this.on( 'activeChange', this.manageState );
};

// manage thumbs state
Mediator.prototype.manageState = function( attrs ) {
	// tell every thumb to discard active state except the one with this index
	this.trigger( 'discardState', attrs.index );
};

module.exports = new Mediator;