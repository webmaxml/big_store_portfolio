// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

var mediator = {};
_.extend( mediator, Backbone.Events );

module.exports = mediator;