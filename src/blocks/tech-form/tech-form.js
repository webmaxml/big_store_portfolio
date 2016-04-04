define(['jquery', 'formStyler', 'widget/spinner'], function( $ ) {
	$(function() {

		var select = document.getElementsByClassName( 'tech-form__select' )[0];
		if( !select ) { return; }

		var $select = $( select );
		var $spinner = $( document.getElementsByClassName( 'tech-form__amount' )[0] );

		$select.styler();
		$spinner.spinner({
			min: 1,
			icons: {
				down: 'fa fa-caret-down',
				up: 'fa fa-caret-up'
			}
		});

	});
});