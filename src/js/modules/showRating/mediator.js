// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function Mediator() {
	_.extend( this, Backbone.Events );
};

module.exports = Mediator;