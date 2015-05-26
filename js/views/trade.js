/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/trade.html',
], function ($, _, Backbone, tradeTemplate) {
	'use strict';

	var TradeView = Backbone.View.extend({

		tagName:  'tr',

		template: _.template(tradeTemplate),

		initialize: function () {
			console.log('init');
			this.render();
		},

		render: function () {

			var app = this.model.collection.app;

			this.$el.html(this.template( this.model.toJSON() ));

			$('#Last_trades tbody', app.$el).append(this.$el);

			$('#History tbody', app.$el).append( this.$el.clone() );
			$('#Open_trades tbody', app.$el).append( this.$el.clone() );

			return this;
		},
	});

	return TradeView;
})