// 0- import Lib
import React, { Component } from 'react';

class Doughnut extends Component {
  // 0- could do constructor if needed - you do have a method to bind, so do one
  constructor(props) {
    super(props);

    // bind methods -- use arrow instead
    this.setDataset = this.setDataset.bind(this);
  }

  // 1- local state to set dataset and enable switch
  state = {
    dataset: 'apples',
  };

  // 1.5 event handler method to switch datasets
  setDataset = (evt) => {
    this.setState({
      dataset: evt.target.value,
    });
  };

  // 2- lifecycle events
  componentDidMount() {
    console.log(this.props.data);
  }

  // 3- render: as only required method
  render() {
    const dataArray = this.props.data;

    // inline styles -- at least they're scoped
    const style = {
      backgroundColor: 'green',
      color: 'white',
    };

    //const data = this.props;

    return (
      <div className="ui" style={style}>
        <h3>Hello Doughnut World</h3>
        {dataArray.map((datum, i) => (
          <li key={i}>
            Apples {datum.apples}, Oranges: {datum.oranges}
          </li>
        ))}
      </div>
    );
  }
}

export default Doughnut;
