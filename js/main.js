/* global require*/
'use strict';

require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: [
                'jquery'
            ],
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        },
        highstock: {            
            deps: [
                'jquery'
            ],
        },
        highstock_exporting: {
            deps: [
                'jquery',
                'highstock'
            ],
        }
    },
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/require-jquery/0.25.0/require-jquery.min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.0/backbone-min',
        backboneLocalstorage: '//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
        bootstrap :  '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
        text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
        highstock :  'http://code.highcharts.com/stock/highstock',
        highstock_exporting :  'http://code.highcharts.com/stock/modules/exporting'
    }
});

require([
    'backbone',
    'views/app',
    'routers/router',
    'bootstrap',
    'highstock',
    'highstock_exporting',
], function (Backbone, AppView, Workspace, Bootstrap, H, He) {
    /*jshint nonew:false*/
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();

    // Initialize the application view
    new AppView();
    
});