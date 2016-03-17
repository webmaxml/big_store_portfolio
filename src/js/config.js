requirejs.config({
	baseUrl: 'js',
	optimize: 'none',
	insertRequire: ['app'],
	paths: {
		// libs
		almond: 'libs/almond',
		jquery: 'libs/jquery',
		jqueryUI: 'libs/jqueryUI',
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
		jqueryUITouch: ['jquery', 'jqueryUI'],
		owlCarousel: ['jquery'],
	}
	// packages: [
	// 	{
	// 		name: 'header',
	// 		location: 'modules/header'
	// 	}
	// ]
});
