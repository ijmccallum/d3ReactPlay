import { select } from "d3";
import chartScales from "./d3ChartScales.js";
import drawPoints from "./d3ChartDrawPoints.js";

const d3Chart = {};

d3Chart.create = function({ el, props, data, domain }) {
  const svg = select(el)
    .append("svg")
    .attr("class", "d3")
    .attr("width", props.width)
    .attr("height", props.height);

  svg.append("g").attr("class", "d3-points");

  this.update({ el, data, domain });
};

d3Chart.update = function({ el, data, domain }) {
  // Re-compute the scales, and render the data points
  var scales = chartScales({ el, domain });
  drawPoints({ el, scales, data });
};

d3Chart.destroy = function({ el }) {
  // Any clean-up would go here
  // in this example there is nothing to do
};

export default d3Chart;
