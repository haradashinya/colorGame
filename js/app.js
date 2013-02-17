require.config({
  paths: {
    'jquery': 'lib/jquery'
  },
  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ["lib/underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});


require(
	["jquery",
		"lib/underscore",
		"lib/backbone",
		"views/startView"
],
function($, _, B, StartView) {
	$(function() {
		var startView = new StartView();
	});
}
);

