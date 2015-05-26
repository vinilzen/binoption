/*global define */
define([
	'underscore',
	'backbone',
	'backboneLocalstorage',
	'models/trade',
	'text!tpl/trades.html',
], function (_, Backbone, Store, Trade, tradesTemplate) {
	'use strict';

	var TradesCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Trade,

		url: '/data/test.json',

		template:_.template(tradesTemplate),

		initialize: function() {
			this.on('getTrade', this.fetch, this);
		},


		render: function(app){
			this.app = app;
			$('#Last_trades', app.$el)
				.html( this.template() )
				.find('.table').addClass('table-bordered');

			$('#History', app.$el).html( this.template() );
			$('#Open_trades', app.$el).html( this.template() );
		}

	});

	return new TradesCollection();
});