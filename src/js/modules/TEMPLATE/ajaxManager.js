// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function AjaxManager( mediator ) {
	_.extend( this, Backbone.Events );

	this.mediator = mediator;
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

module.exports = AjaxManager;
	 