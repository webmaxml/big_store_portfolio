requirejs.config({

	baseUrl: 'js',
	// optimize: 'uglify2',
	optimize: 'none',
	preserveLicenseComments: false,
	insertRequire: ['app'],

	paths: {
		// jquery UI paths
		ui: 'libs/jqueryUI',
		widget: 'libs/jqueryUI/widgets',
		effect: 'libs/jqueryUI/effects',
		// libs
		almond: 'libs/almond',
		text: 'libs/text',
		jquery: 'libs/jquery',
		jqueryUITouch: 'libs/jqueryUITouch',
		backbone: 'libs/backbone',
		underscore: 'libs/underscore',
		owlCarousel: 'libs/owlCarousel',
		isotope: 'libs/isotope',
		modernizr: 'libs/modernizr',
		formStyler: 'libs/formstyler',
		// modules
		global: 'global',
		mediator: 'mediator',
		btnCart: '../blocks/btn-cart/btn-cart',
		shoppingCart: '../blocks/shopping-cart/shopping-cart',
		shoppingAmount: '../blocks/shopping-cart/shopping-cart__amount',
		trending: '../blocks/trending/trending',
		mobileMenu: '../blocks/header/header',
		featuredSlider: '../blocks/featured/featured',
		brandSlider: '../blocks/brand-slider/brand-slider',
		productsScrollbar: '../blocks/new-products/new-products',
		saleBadge: '../blocks/sale-badge/sale-badge',
		rating: '../blocks/rating/rating',
		techForm: '../blocks/tech-form/tech-form',
		tabs: '../blocks/tabs/tabs'
	},

	shim: {
		modernizr: {
			exports: 'Modernizr'
		},
		owlCarousel: ['jquery'],
	},

	packages: [

		{
			name: 'productView',
			location: 'modules/productView'
		},

		{
			name: 'currency',
			location: 'modules/currency'
		},

		{
			name: 'topSlider',
			location: 'modules/topSlider'
		},

		{
			name: 'featuredSlider',
			location: 'modules/featuredSlider'
		},

	]
	
});
