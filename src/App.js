import React, { Component } from 'react'

import ListDisplay from './components/ListDisplay';
import axios from 'axios'

class App extends Component {
  render()
  {
    return (
      <div className="App">
        <ListDisplay/>
      </div>
    );
  }
 
}

export default App;
