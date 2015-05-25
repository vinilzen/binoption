$(function () {
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=new-intraday.json&callback=?', function (data) {

        // create the chart
        $('#chart').highcharts('StockChart', {

            chart: {
                height: 250
            },

            exporting: {
                enabled: false 
            },

            rangeSelector : {
                enabled: false
            },

            series : [{
                name : 'AAPL',
                type: 'candlestick',
                data : data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
});