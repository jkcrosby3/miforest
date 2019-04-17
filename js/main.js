/*
*    main.js
*    Project 2 - Michigan Forests
*/

var margin = {left:80, right:20, top:50, bottom: 100}
var height = 500 - margin.top - margin.bottom,
	width = 800 - margin.left - margin.right;
/*	
var g = d3.select("#chart-area")
		.append("svg")
			.attr("width", width+margin.left+margin.right)
			.attr("height", height+margin.top+margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + 
								"," + margin.top + ")");
*/								
var formattedData;


	




//getting the data
var ds_sr003
	d3.csv("data/sr003.csv", function(error, data){
		if(error) {
			console.log(error);
		} else{
			console.log(data);
			ds_sr003=data;
		}
	});
	
chart = {
  const svg = d3.select(DOM.svg(width, height));

  svg.append("g")
    .selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", d => `translate(${x0(d[groupKey])},0)`)
    .selectAll("rect")
    .data(d => keys.map(key => ({key, value: d[key]})))
    .join("rect")
      .attr("x", d => x1(d.key))
      .attr("y", d => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", d => y(0) - y(d.value))
      .attr("fill", d => color(d.key));

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  svg.append("g")
      .call(legend);

  return svg.node();
}

legend = svg => {
  const g = svg
      .attr("transform", `translate(${width},0)`)
      .attr("text-anchor", "end")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
    .selectAll("g")
    .data(color.domain().slice().reverse())
    .join("g")
      .attr("transform", (d, i) => `translate(0,${i * 20})`);

  g.append("rect")
      .attr("x", -19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", color);

  g.append("text")
      .attr("x", -24)
      .attr("y", 9.5)
      .attr("dy", "0.35em")
      .text(d => d);
}

x0 = ƒ(i)

x0 = d3.scaleBand()
    .domain(data.map(d => d[groupKey]))
    .rangeRound([margin.left, width - margin.right])
    .paddingInner(0.1)
	
x1 = ƒ(i)

x1 = d3.scaleBand()
    .domain(keys)
    .rangeRound([0, x0.bandwidth()])
    .padding(0.05)

y = ƒ(n)

y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d3.max(keys, key => d[key]))]).nice()
    .rangeRound([height - margin.bottom, margin.top])

color = ƒ(i)

color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"])
	
xAxis = ƒ(g)

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x0).tickSizeOuter(0))
    .call(g => g.select(".domain").remove())
	
yAxis = ƒ(g)

yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, "s"))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))

data = Array(6) [Object, Object, Object, Object, Object, Object, columns: Array(8), y: "Population"]
groupKey = "State"

data = Object.assign(await d3.csv("https://gist.githubusercontent.com/mbostock/3887051/raw/805adad40306cedf1a513c252ddd95e7c981885a/data.csv", d3.autoType), {y: "Population"})
groupKey = data.columns[0]

keys = Array(7) [
  0: "Under 5 Years"
  1: "5 to 13 Years"
  2: "14 to 17 Years"
  3: "18 to 24 Years"
  4: "25 to 44 Years"
  5: "45 to 64 Years"
  6: "65 Years and Over"
]

keys = data.columns.slice(1)

margin = Object {top: 10, right: 10, bottom: 20, left: 40}

height = 500
height = 500

d3 = Object {event: null, format: ƒ(t), formatPrefix: ƒ(t, n), timeFormat: ƒ(t), timeParse: ƒ(t), utcFormat: ƒ(t), utcParse: ƒ(t), version: "5.9.2", bisect: ƒ(n, e, r, i), bisectRight: ƒ(n, e, r, i), bisectLeft: ƒ(n, e, r, i), ascending: ƒ(t, n), bisector: ƒ(t), cross: ƒ(t, n, e), descending: ƒ(t, n), deviation: ƒ(t, n), extent: ƒ(t, n), histogram: ƒ(), thresholdFreedmanDiaconis: ƒ(t, e, r), thresholdScott: ƒ(t, n, e), …}
d3 = require("d3@5")