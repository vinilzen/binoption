/*global define*/
define([
	'underscore',
	'backbone',
	'views/trade',
], function (_, Backbone, TradeView) {
	'use strict';

	var Trade = Backbone.Model.extend({

		defaults: {
			id: 0,
			symbol: 'USDEUR',
			direction: '',
			open: 0, 
			close: 0, 
			amount: 0, 
			profit: 0,
			procent: 0,
			time_now: 0,
			time_total: 0,
		},

		initialize: function(){
			this.view = new TradeView({model:this});
		},
	});

	return Trade;
});