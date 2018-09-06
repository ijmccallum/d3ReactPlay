import React from "react";
import indexD3 from "./indexD3.js";
import calcDomainTime from "./calcDomainTime.js";
import calcDomainValue from "./calcDomainValue.js";

let contributions = [
  {
    label: "year 1",
    amount: 100
  },
  {
    label: "year 2",
    amount: 100
  },
  {
    label: "year 3",
    amount: 100
  },
  {
    label: "year 4",
    amount: 100
  }
];

class ContributionGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      xDomain: calcDomainTime(contributions),
      yDomain: calcDomainValue(contributions),
      contributions: contributions
    };

    this.svg = React.createRef();
  }

  componentDidMount() {
    // D3 Code to create the chart
    indexD3.create({
      svg: this.svg.current,
      data: this.state.contributions,
      domain: this.state.domain
    });
  }

  componentDidUpdate() {
    // D3 Code to update the chart
    indexD3.update({
      svg: this.svg.current,
      data: this.state.contributions,
      domain: this.state.domain
    });
  }

  componentWillUnmount() {
    indexD3.destroy({ svg: this.svg.current });
  }

  render() {
    return (
      <div>
        <p>Contribution Graph</p>
        <svg ref={this.svg} />
      </div>
    );
  }
}

export default ContributionGraph;
