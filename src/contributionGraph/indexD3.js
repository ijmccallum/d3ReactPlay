/**
 * providing d3 create, update, and destroy methods to map to the react lifecycle
 */

import { select } from "d3";
import calcScales from "./calcScales.js";
import drawAxis from "./drawAxis.js";

const create = function({ svg, contributions, domain }) {
  this.update({ svg, contributions, domain });
};

const update = function({ svg, contributions, domain }) {
  // Re-compute the scales, and render the data points
  var scales = calcScales({ svg, domain });
  drawAxis({ svg, scales, contributions });
};

const destroy = function({ svg }) {
  // Any clean-up would go here
  // in this example there is nothing to do
};

export default {
  create,
  update,
  destroy
};
