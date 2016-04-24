function init( tabsItems ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Tabs = require( './entities/tabs' );
	var Panes = require( './entities/panes' );
	var mediator = require( './mediator' );

	var initial;

	// create set for every tab item
	$( tabsItems ).each( function( index ) {
		
		var tabModel = new Tabs.Model({ index: index });

		// set initial tab
		if ( index === 0 ) {
			initial = tabModel;
		}

		var tabView = new Tabs.View({ el: this, model: tabModel });
		var tabController = new Tabs.Controller( tabModel, tabView );

	} );

	var panes = document.getElementsByClassName( 'product-desc__pane' );

	// create set for every pane
	$( panes ).each( function( index ) {
		
		var paneModel = new Panes.Model({ index: index });
		var paneView = new Panes.View({ el: this, model: paneModel });
		var paneController = new Panes.Controller( paneModel, paneView );

	} );

	// make initial tab active
	initial.set( 'state', 'active' );
};

module.exports = { init: init };
