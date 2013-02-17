define(["lib/backbone"], function(Backbone) {
	var StartView = Backbone.View.extend({
		el: "#main",
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html("hello");
		}
	});
	return StartView;
});
