// 0- import Lib
import React, { Component } from 'react';

// 00- import d3 -- the full thing - this is the way of it
// TODO: Refactor and start using the modular d3 imports
// ex: import { scaleLinear } from 'd3-scale';
import * as d3 from 'd3';
window.d3 = d3; // global object access for dev console -- works!

// 1- create a Doughnut class component (use extends as easy inheritence)
class Doughnut extends Component {
  // 1- local state to set dataset and enable switch
  state = {
    dataset: 'apples',
  };

  // 1.5 event handler method to switch datasets
  setDataset = (e) => {
    this.setState({
      dataset: e.target.value,
    });
  };

  // A- Simple Declarative D3 Code in the render
  render() {
    // TODO: move this to a better place and code up a renderChart() method to remove the D3 code from render()
    const width = 640;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    // character vector of ten colors - renders as hex code colors in an svg fill
    const color = d3.schemeCategory10;

    // pass the data to the d3 pie layout
    const pie = d3
      .pie()
      .value((d) => d[this.state.dataset])
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 20);

    let displayedData = pie(this.props.data);

    // 0- Local styles // TODO: refactor to use styled components
    const formStyles = {
      position: 'absolute',
      right: '10px',
      top: '10px',
    };

    return (
      <div>
        <form style={formStyles}>
          <label>
            <input
              type="radio"
              name="dataset"
              value="apples"
              checked={this.state.dataset === 'apples'}
              onChange={this.setDataset}
            />
            Apples
          </label>
          <label>
            <input
              type="radio"
              name="dataset"
              value="oranges"
              checked={this.state.dataset === 'oranges'}
              onChange={this.setDataset}
            />
            Oranges
          </label>
        </form>

        {/* render svg powered with d3 - also notice props on svg primitives */}
        <svg width={width} height={height}>
          <g transform={'translate(' + width / 2 + ',' + height / 2 + ')'}>
            {displayedData.map((slice, i) => (
              <path d={arc(slice)} key={i} fill={color[i]} />
            ))}
          </g>
        </svg>
      </div>
    );
  }
}

export default Doughnut;
