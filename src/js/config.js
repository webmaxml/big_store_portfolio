requirejs.config({
	baseUrl: 'js',
	optimize: 'uglify2',
	preserveLicenseComments: false,
	insertRequire: ['app'],
	paths: {
		// libs
		almond: 'libs/almond',
		jquery: 'libs/jquery',
		// jquery UI paths
		ui: 'libs/jqueryUI',
		widget: 'libs/jqueryUI/widgets',
		effect: 'libs/jqueryUI/effects',
		
		jqueryUITouch: 'libs/jqueryUITouch',
		owlCarousel: 'libs/owlCarousel',
		isotope: 'libs/isotope',
		// modules
		shoppingCart: 'modules/shoppingCart',
		trending: 'modules/trending',
		mobileMenu: 'modules/mobileMenu',
		topSlider: 'modules/topSlider',
		featuredSlider: 'modules/featuredSlider',
		brandSlider: 'modules/brandSlider',
		productsScrollbar: 'modules/productsScrollbar',
		saleBadge: 'modules/saleBadge'
	},
	shim: {
		// jqueryUITouch: ['jquery', 'ui/widget', 'widget/mouse'],
		owlCarousel: ['jquery'],
	}
	// packages: [
	// 	{
	// 		name: 'header',
	// 		location: 'modules/header'
	// 	}
	// ]
});
