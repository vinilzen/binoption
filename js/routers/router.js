/*global define*/
define([
	'jquery',
	'backbone',
	'collections/trades',
], function ($, Backbone, Trades) {
	'use strict';

	var TradeRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			Trades.trigger('filter');
		}
	});

	return TradeRouter;
});