import { scaleLinear } from "d3";

/**
 *
 * @param {Object} config - config obj for the d3 scales object
 * @param {Object} config.el - the element within which the scale will have to fit points from the passed domain
 * @param {Object} config.domain - the range within which points are restricted
 * @param {Array} config.domain.x - min, max x data values
 * @param {Array} config.domain.y - min, max y data values
 */

export default function({ el, domain }) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = scaleLinear()
    .range([0, width])
    .domain(domain.x);

  var y = scaleLinear()
    .range([height, 0])
    .domain(domain.y);

  var z = scaleLinear()
    .range([5, 20])
    .domain([1, 10]);

  return { x: x, y: y, z: z };
}
