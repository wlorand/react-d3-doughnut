// import lib and component
import React, { Component } from 'react';

// import local components
import Doughnut from './components/Doughnut';

// import global css
import './App.css';

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
    // pass in the data as prop to the child component -- brute force data integration
    // better than d3.json() for local data file
    // store data in the state of the react app
    return (
      <div className="App">
        <Doughnut data={this.state.fruitData} />
      </div>
    );
  }
}

export default App;
