import React from "react";
import ReactChart from "./chart/reactChart.js";
import ContributionGraph from "./contributionGraph";

let data1 = [
  { id: "5fbmzmtc", x: 7, y: 41, z: 6 },
  { id: "s4f8phwm", x: 11, y: 45, z: 9 }
];

let data2 = [
  { id: "5fbmzmtc", x: 11, y: 45, z: 9 },
  { id: "s4f8phwm", x: 7, y: 41, z: 6 }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sampleData: data1,
      toggle: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.toggle) {
      this.setState({
        sampleData: data2,
        toggle: false
      });
    } else {
      this.setState({
        sampleData: data1,
        toggle: true
      });
    }
  }

  render() {
    return (
      <div>
        <p>App wrapper</p>
        <button onClick={this.toggle}>toggle</button>
        <ReactChart
          data={this.state.sampleData}
          domain={{ x: [0, 30], y: [0, 100] }}
          width={1000}
          height={500}
        />
        <ContributionGraph />
      </div>
    );
  }
}

export default App;
