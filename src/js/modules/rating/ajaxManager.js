// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

var mediator = require( './mediator' );

function AjaxManager() {
	_.extend( this, Backbone.Events );

	this.listenTo( mediator, 'setRating', this.manageSetRating )
};

AjaxManager.prototype.manageSetRating = function( index ) {
	var data = { activeIndex: index };
	// this.send( data );
};

AjaxManager.prototype.send = function( data ) {
	$.ajax({
		url: "script.php",
		method: "POST",
		data: data,
		dataType: "json"
	}).done( function( data ) {
		// do something
	});
};

module.exports = new AjaxManager;
	 