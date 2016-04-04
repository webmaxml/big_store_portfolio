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
		jquery: 'libs/jquery',
		jqueryUITouch: 'libs/jqueryUITouch',
		owlCarousel: 'libs/owlCarousel',
		isotope: 'libs/isotope',
		modernizr: 'libs/modernizr',
		formStyler: 'libs/formstyler',
		// modules
		shoppingCart: '../blocks/shopping-cart/shopping-cart',
		trending: '../blocks/trending/trending',
		mobileMenu: '../blocks/header/header',
		topSlider: '../blocks/top-slider/top-slider',
		featuredSlider: '../blocks/featured/featured',
		brandSlider: '../blocks/brand-slider/brand-slider',
		productsScrollbar: '../blocks/new-products/new-products',
		saleBadge: '../blocks/sale-badge/sale-badge',
		productView: '../blocks/product/product',
		rating: '../blocks/rating/rating',
		techForm: '../blocks/tech-form/tech-form'
	},
	shim: {
		modernizr: {
			exports: 'Modernizr'
		},
		owlCarousel: ['jquery'],
	}
});
