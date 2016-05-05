// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

function globalMediator() {
	_.extend( this, Backbone.Events );
};

module.exports = new globalMediator;