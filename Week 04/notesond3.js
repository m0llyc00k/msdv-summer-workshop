/*
D3
data diven visualizations
open web standards
familiar conventions
CSS selectors
function chaining
data&more
    easy parsing
    data-binding
    transition & animation
    
    
Basic selections
selecting the DOM, DOM access
    select (STR) - chose 1st element in the DOM that you specify 
    selectALL (STR)
    STR CSS selectors (like querySelector or $ selector)
    
    */
    
<thread>
    <tr class="head">
    <th scope
    
    
    d3.selectAll(".day-high .temp").text("hot");
    d3.selectAll("tr:nth-child(1) .day-high .temp").text"hot");  
    d3.selectAll("tr:nth-child(even) .day-high .temp").text"hot");
    
    /*
    D3 modifying elements
        text()
        html()
        append()
        insert()
        */
        
        d3.selectAll("tr:nth-child(1) .day-high .temp")
            .html ('<strong>hot</strong>')
            .append ('span', 'strong')
            .html (' today')
        
        d3.selectAll('tr:nth-child(5)')
            .remove();
            
    /* D3 Attributes & CSS
    modifying attributes & css
        - style() css styles
        - classed() toggle classes
        - attr() any attribute 
        - property () any property
        */
        
        
         d3.selectAll("tr:nth-child(4) .day-high")
            .append('span')
            .html('hot')
            // .style ('backgrounf', 'red')
            // .style ('padding', '3px')
            // .style('margin-left', '3px')
            // .style ('border-radius', '3px')
            
    .classed('label label-danger', true)
    .classed('label-danger', false)
    .classed('label-warning', true)
    
    d3.select('h2-span')
        .classed ('small'. false)
        
    d3.selectAll('tr')
        .insert ('td', ':first-child')
        .append('input') // makes boxes you can type in
        .attr('type', 'checkbox') // makes check boxes
        .property('checked', true) //makes all cboxes checked
        
    /* D3 - binding data to the DOM
        data() joins data
        callback access
        index available
        */
        
    d3.selectAll(".day-high .temp")
        .data([45, 78, 56, 34])
        .html (funtion(d, i) { //remembers the 45 etc. you wrote
        if(i==0) {
            return '<strong class="text-muted" style="font-size: 2rem">'
        } else {
            if (d >= 76) {
                 return '<strong class="text-danger>' + d + '</strong>'; 
            }
            else{
        }
            return '<strong>' + d + '</strong>'; // bolds the data
        }
        )
        
        /* queing selections
            creating subselections
            - enter()
            - sub-selections
            - exit()
            */
            
        var mydata = [
        { date: '4/01/2017', low: 55, high: 78 },
        
        ]
        
        d3.select('tbody')
            .selectAll('tr')
            .data(mydata)
            .enter().append('t')
            .html(function(d) {
                return 'th scope="row">' + d.date +
                        '</th><td>' + d.low
                        '</td><td>' + d.high + '</td'
            })
            
            /*SVG graphics
            - HTML shapes lacking
             -XXML format
             - style through CSS
             - easy to create
             scriptable
             */
             
             /* svg primatives
             <svg> tag
             use style declarations
             rect, circle, line, text, polyline
             <g> creates groups
             xlink:href create instance 
             */
             
             <svg width="600" height="400" 
             style="background: blue">
             
             <line x1="0" y1="200" x2="600" y2="200"
             style="stroke: red; stroke-width:40px" />
             
             </svg> 
             
             <rect
                x="200" y="100"
                width="200" height+"200"
                style="fill: red;"
             />
             
             <circle
             cx="300" cy="200"
             style="fill: dark red";
             />
             
             <text 
             x="10" y="390"
             font-family="sans-serif">
             Hello SVG</text>
             
             <g id="triangle">
                <polyline 
                    points="10 35, 30 10, 50 35"
                    style="fill: dark blue";
                />
                </g>
                
        <use xlink:href="#triangle" x="30" y="0" /> //reuse triangle
        
        /*creating SVGs
        - target DOM
        - append ()
        - style (), attr(), etc. 
        */
        
        d3.select('#viz')
            .append('svg')
                .attr('width', 600)
                .attr('height', 400)
                 .style('background', 'blue')
             .append('rect')
                .attr('x', 200)
                .attr('height', 200)
                .attr('width', 200)
                .style('fill', 'red')
                
        d3.select('#viz svg')
            .append('circle')
                .attr('cx', 300)
                .attr('cy', 200)
                etc etc
                
                
        //create a simple bar chart
        
        var bardata = [20,30,45,15]
        var height = 400
            width = 600
            barWidth=50,
            barOffset=5
            tempcolor;
            yAxisValues;
            yAxisTicks;
            tooltip;
            colors;
            myChart;
            
            
            
        d3.select('#viz').append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', 'blue')
        .selectALL('rect').data(bardata)
            .enter().append('rect')
                .style('fill', '#red')
                .attr('width', barWidth)
                .attr('height', function(d)) {
                    return height - d; 
                })
                
                .attr('x', function(d, i)) {
                        return i*(barWidth + barOffset)
                })
                .attr('y', function(d) { //makes the chart justify bottom
                    return height - yScale(d);
                })
                

    
    // useing ordinal scales
    // linear vs ordinal scales 
    scaleBand()
    padding(), paddingInner(), paddingOuter()
    properties: bandwidth(), etc. //width of bars
    
            
        d3.select('#viz').append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', 'blue')
        .selectALL('rect').data(bardata)
            .enter().append('rect')
                .style('fill', '#red')
                .attr('width', function(d){
                    return xScale.bandwidth(); //based on width of container above
                })
                .attr('height', function(d)) {
                    return yScale(d); //add yScale to reference below
                })
                
                .attr('x', function(d, i)) {
                        return xScale(d);
                })
                .attr('y', function(d) { //makes the chart justify bottom
                    return height - yScale(d);
                })
                
 /*adding a linear scale*/

scaleLiner() //make it grow in a specific range
domain() //data
range() //values you feed into an array, what you want to scale data to
statistics: min(), max(), etc.

var yScale = d3.scaleLiner()//new map of info (array) depending on height of graphic
    .domain ([d3.max(bardata)])
    .range ([0, height]) //start at 0, rearranged to fit according to height (svg)
    
yAxisVaulues = d3.scaleLiner()
    .domain([0, d3.max(temperatures)])
    .range([height,0]);
    
yAxisTicks = d3.axisLeft(yAxisValues)
    .ticks(10)
    
    
var xScale = d3.scaleBand()
    .domain(bardata)
    .paddingInner(.2) // adjust spacing in between bars
    .range(0, width)
    
//creating meaningful color scales

var colors = d3.scaleLiner()
    .domain([0, d3.max(bardata.length)])
    .range(['blue', 'dark blue'])
    
     d3.select('#viz').append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', 'blue')
        .selectALL('rect').data(bardata)
            .enter().append('rect')
                .attr('fill', function(d, i){
                    return colors(i) //the height of the bar determines color of the item
                })
                .attr('width', function(d){
                    return xScale.bandwidth(); //based on width of container above
                })
                .attr('height', function(d)) {
                    return yScale(d); //add yScale to reference below
                })
                
                .attr('x', function(d, i)) {
                        return xScale(d);
                })
                .attr('y', function(d) { //makes the chart justify bottom
                    return height - yScale(d);
                })
                
                
//from the top to get more colors
var bardata = [];
    for (var i = 0; i<100; i++){
        bardata.push(math.random() * 30); //gives 30 bars with more gradation
    }
    
var colors = d3.scaleLiner()
    .domain([0, bardata.length *.33,
    bardata.length *.66,
    bardata.length]) // gives 3 colors at thirds of the way
    .range(['blue', 'dark blue'])
    
    
// //add events
// on(EVT) handler
// mouseout, mouseover, etc.
// modify properties
// target with this

.on('mouseover', function(d) {
    d3.select(this)
        .style('opacity', .5) //when you roll over it it changes opacity
var tempcolor
    tempcolor = this.style.fill;
    d3.select(thos)
    .style('fill', 'yellow')
    .transition()
    .delay(400) // means that the effect wont take place until after 400 miliseconds
    .duration(1000) //this is 1 second
        })
        
.on('mouseout', function(d)
    d3.select(this)
    .style ('opacity', 1)
    .style ('fill', tempColor)
    .transition()
}
)

// using transitions and animations
// - transition() sets uo
// - duration() control speed (how long it takes
// - delay() add time

.on('mouseover', function(d) {
    d3.select(this)
        .style('opacity', .5) //when you roll over it it changes opacity
var tempcolor
    tempcolor = this.style.fill;
    d3.select(thos)
    .style('fill', 'yellow')
    .transition()
    .delay(400) // means that the effect wont take place until after 400 miliseconds
    .duration(1000) //this is 1 second
        })
        
.on('mouseout', function(d) {
    d3.select(this)
    .style ('opacity', 1)
    .style ('fill', tempColor)
    .transition()
}
)


myChart.transition()
    .attr('height', function(d){
        return yScale(d);
    })
    .attr('y', function(d, i){
        return i * 20
    }) // bars load when page loads, 20 milisecons each 
    .duration (1000) // takes a second to load
    .ease(d3.easeBoundOutw) //bouncing at the top or end of transition
    
    
// adding a tooltip using the DOM, gather additional data about the page
var tooltip = d3.select('body')
    .append ('div')
    .style('position', 'absolute')
    .style ('padding', '0 10px')
    
    
tooltip.transition().duration(200)
    .style('opacity', .9)
    
    tooltip.html(d)
        .style('left', (d3.event.pageX -35) + 'px')
        .style('top', (d3.event.pageY -30) + 'px')
        // '<div style=font-size: 2rem; font-weight: bold">'
        
        
//USING EXTERNAL DATA
// - d3 AJAX
// - .csv, html, .json, .text, .tsv, .xml
// json editor online

var temperatures = [],
        var bardata = [20,30,45,15]
        var height = 400,
        width = 600,
        barWidth=50,
        barOffset = 5;
        
var     tempcolor;
        yScale;
        xScale;

d3.json('js/data/forecast.json', function(d) {
    
    for (var i = 0; i<d.list.length; i++) {
        temperature.push(d.list[i].main.temp); //change all var to temperature (was bardata)
    }
})

colors = d3.scaleLiner()
    .domain([0, 65, d3.max(temperatures)]) // anything thats 65 degrees to 0 degrees.
    .range (['#ffffff'], '#2D8BCF', '#DA3637')
    
    
myChart = d3.select('#viz').append('svg')
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect').data(temperatures)
    .enter().append('rect')
        .attr('fill', colors)
        .attr('width', funtion(d) {
            return xScale.bandwidth();
        })
        .attr('height', 0)
        .attr('x', function(d){
            return xScale(d);
        })
        .attr('y', height)
        
        
        
// Creating a guide
// - regular scales
// - axisTop, axisRight, asixLieft, axisBottom
// - tick methods
// - group elements

//https://github.com/d3/d3/wiki
//https://bl.ocks.org/mbostock