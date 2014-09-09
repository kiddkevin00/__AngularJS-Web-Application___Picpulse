/*
 * d3 sample
 * =========
 */
// d3 selector example
d3.select("body").style("background-color", "yellow");
d3.selectAll("p").style("color", "green");

d3.select("body")
    .append("p")
    .html("adding some text in the bottom..");

// loading data to a chart
var data = [4, 8, 15, 16, 23, 42];

d3.select('.chart')
    .selectAll('div')
    .data(data)
    .enter().append('div')
    .style('width', function (d) {
        return d * 10 + 'px';
    })
    .style('background-color', 'steelblue')
    .style('margin', '1px')
    .style('text-align', 'right')
    .style('color', 'white')
    .style('padding', '3px')
    .text(function (d) {
        return d;
    });

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

