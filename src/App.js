// import lib and component
import React, { Component } from 'react';

// child components
import Doughnut from './components/Doughnut';

// styles
import './app.css';

// TODO: refactor to use rfc and useState hook with initial data
class App extends Component {
  state = {
    fruitData: [
      { apples: 53245, oranges: 200 },
      { apples: 28479, oranges: 200 },
      { apples: 19697, oranges: 200 },
      { apples: 24037, oranges: 200 },
      { apples: 40245, oranges: 200 },
    ],
  };

  render() {
    // brute force data React-D3 integration with a data prop TODO: refactor
    return (
      <div className="App">
        <Doughnut data={this.state.fruitData} />
      </div>
    );
  }
}

export default App;
