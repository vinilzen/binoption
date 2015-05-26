/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'config',
	'collections/trades',
	'text!tpl/app.html',
], function ($, _, Backbone, config, Trades, AppTemplate) {
	'use strict';

	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#tradeapp',

		default_lang: 'eng', // 'eng'| 'rus'

		template: _.template(AppTemplate),

		// Delegated events for creating new items, and clearing completed ones.
		events: { },

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.template( config.t[this.default_lang] ));
			this.afterRender();
		},

		afterRender:function () {
			this.initChart();
			Trades.render(this);
			Trades.trigger('getTrade')
		},

		initChart: function () {
			$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=new-intraday.json&callback=?', function (data) {
				$('#chart').highcharts('StockChart', {
					chart: { height: 250 },
					exporting: { enabled: false },
					rangeSelector : { enabled: false },
					series : [{
						name : 'AAPL',
						type: 'candlestick',
						data : data,
						tooltip: { valueDecimals: 2 }
					}]
				});
			});
		}
	});

	return AppView;
});