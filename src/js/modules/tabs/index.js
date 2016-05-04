function init( tabContainers ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Tabs = require( './entities/tabs' );
	var Panes = require( './entities/panes' );
	var Mediator = require( './mediator' );

	$( tabContainers ).each( function() {
		
		var mediator = new Mediator();

		var tabs = this.querySelectorAll( '[data-entity="tab"]' );
		var panes = this.querySelectorAll( '[data-entity="pane"]' );

		// creating tabs
		_.each( tabs, function( tab, index ) {
			var tabModel = new Tabs.Model({ index: index });
			var tabView = new Tabs.View({ el: tab });
			var tabController = new Tabs.Controller( mediator, tabModel, tabView );
		} )

		// creating panes
		_.each( panes, function( pane, index ) {
			var paneModel = new Panes.Model({ index: index });
			var paneView = new Panes.View({ el: pane });
			var paneController = new Panes.Controller( mediator, paneModel, paneView );
		} )

		// set initial active
		mediator.setActive(1);

	});

};

module.exports = { init: init };
