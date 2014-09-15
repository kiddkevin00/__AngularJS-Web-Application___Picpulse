/**
 * =========
 * C3 SAMPLE
 * =========
 */
// load hard-coded data
/*var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
});*/

// load data from external file
var chart = c3.generate({
    bindto: '#chart',
    data: {
        url: 'data/chartingdata.csv',
        axes: {
            data1: 'y2' // ADD

        }

    },
    grid: {
        x: {
            lines: [
                {value: 2, text: 'Lable 2'},
                {value: 3, text: 'Lable 3'}
            ]
        }
    },
    axis: {
        // (TODO)
        /*x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        },*/
        y: {
            label: { // ADD
                text: 'Y Label',
                position: 'outer-middle'
            }
        },
        y2: {
            show: false, //true
            label: { // ADD
                text: 'Y2 Label',
                position: 'outer-middle'
            }
        }
    },
    subchart: {
        show: false //true
    }
});

/*setTimeout(function () {
    c3.generate({
        data: {
            url: 'data/chartingdata.csv',
            mimeType: 'json'
        }
    });
}, 1000);*/

setTimeout(function () {
    chart.data.colors({
        data1: d3.rgb('#ff0000').darker(1),
        data2: d3.rgb('#00ff00').darker(1),
        data3: d3.rgb('#0000ff').darker(1)
    });
}, 1000);

setTimeout(function () {
    chart.data.colors({
        data1: d3.rgb('#ff0000').darker(2),
        data2: d3.rgb('#00ff00').darker(2),
        data3: d3.rgb('#0000ff').darker(2)
    });
}, 2000);


