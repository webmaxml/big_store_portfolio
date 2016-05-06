function init( elements ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Document = require( './entities/document' );
	var Mediator = require( './mediator' );

	var mediator = new Mediator();
		
	var documentView = new Document.View({ el: document });
	var documentController = new Document.Controller( mediator, null, documentView );
};

module.exports = { init: init };
