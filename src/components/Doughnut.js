// 0- import Lib
import React, { Component } from 'react';

// 00- import d3 -- the full thing - this is the way of it
// TODO: Refactor and start using the modular d3 imports
import * as d3 from 'd3';
window.d3 = d3; // global object access for dev console -- works!

// 1- create a Doughnut class component (use extends as easy inheritence)
class Doughnut2 extends Component {
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

  render() {
    // 0- Local styles
    const formStyles = {
      position: 'absolute',
      right: '10px',
      top: '10px',
    };

    // A- Declarative D3 Code in the render
    // TODO: move this to a better place and get with a renderChart()
    const width = 640;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const color = d3.schemeCategory10;

    const pie = d3
      .pie()
      .value((d) => d[this.state.dataset])
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 20);

    let displayedData = pie(this.props.data);

    // render a <form> and an <svg> for pie
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
            />{' '}
            Apples
          </label>
          <label>
            <input
              type="radio"
              name="dataset"
              value="oranges"
              checked={this.state.dataset === 'oranges'}
              onChange={this.setDataset}
            />{' '}
            Oranges
          </label>
        </form>

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

export default Doughnut2;
