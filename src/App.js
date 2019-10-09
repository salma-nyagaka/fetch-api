import React, { Component } from 'react';
import Routes from '../src/Routes/Routes'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      attributes: [],
    }
  }

  render() {
    return (
      <div>
        <Routes />

      </div>
    );
  }
}

export default App;