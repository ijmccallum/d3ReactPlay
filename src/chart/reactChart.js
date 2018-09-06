import React from "react";
import d3Chart from "./d3Chart.js";

class ReactChart extends React.Component {
  constructor(props) {
    super(props);

    this.d3El = React.createRef();
  }
  componentDidMount() {
    // D3 Code to create the chart
    this._chart = d3Chart.create({
      el: this.d3El.current,
      props: this.props,
      data: this.props.data,
      domain: this.props.domain
    });
  }

  componentDidUpdate() {
    // D3 Code to update the chart
    d3Chart.update({
      el: this.d3El.current,
      data: this.props.data,
      domain: this.props.domain
    });
  }

  componentWillUnmount() {
    d3Chart.destroy({ el: this.d3El.current });
  }

  render() {
    return (
      <div>
        <p>React chart wrapper</p>
        <div ref={this.d3El} />
      </div>
    );
  }
}

export default ReactChart;
