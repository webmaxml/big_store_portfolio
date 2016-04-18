define(['jquery', 'underscore' , 'backbone', 'formStyler', 'widget/spinner'], function( $, _, Backbone ) {

	/******************** Views ********************/

	var Select = Backbone.View.extend({
		el: document.getElementsByClassName( 'tech-form__select' )[0],

		render: function() {
			this.$el.styler();
		}
	});

	var Spinner = Backbone.View.extend({
		el: document.getElementsByClassName( 'tech-form__amount' )[0],

		render: function() {
			this.$el.spinner({
				min: 1,
				icons: {
					down: 'fa fa-caret-down',
					up: 'fa fa-caret-up'
				}
			});
		}
	});

	/******************** Constructor ********************/

	var FormConstructor = function() {
		this.select = new Select();
		this.spinner = new Spinner();

		this.select.render();
		this.spinner.render();
	};

	return FormConstructor;
});