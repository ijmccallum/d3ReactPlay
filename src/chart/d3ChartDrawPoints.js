import { select, transition, easeLinear } from "d3";

/**
 *
 * @param {Object} config - config options and data for the points
 * @param {Object} config.el - could be an svg or g within an svg, the root element for these points.React
 * @param {Object} config.scales - a d3 scales object?
 * @param {Array} config.data - the array of data points to draw
 */

export default function({ el, scales, data }) {
  //The "join" - mapping data to "virtual" elements
  var point = select(el)
    .selectAll(".d3-points")
    .selectAll(".d3-point")
    .data(data, function(d) {
      //second param is a key for each datum
      return d.id;
    });

  //new points coming in - just give them their places without animation
  point
    .enter()
    .append("circle")
    .attr("class", "d3-point")
    .attr("cx", function(d) {
      return scales.x(d.x);
    })
    .attr("cy", function(d) {
      return scales.y(d.y);
    })
    .attr("r", function(d) {
      return scales.z(d.z);
    });

  //existing points updating (they already have the above, this is for any changes)
  point
    .transition()
    .attr("cx", function(d) {
      return scales.x(d.x);
    })
    .attr("cy", function(d) {
      return scales.y(d.y);
    })
    .attr("r", function(d) {
      return scales.z(d.z);
    });

  //existing points going away
  point.exit().remove();
}
