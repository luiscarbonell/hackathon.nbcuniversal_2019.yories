import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  makeAPICall() {
    axios.get('/some-endpoint').then(function(response) {
      console.log(response.data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            Look at your console.
          </p>
          <a 
            className="App-link"
            rel="noopener noreferrer"
            onClick={this.makeAPICall}
          >
            Make API Call
          </a>
        </header>
      </div>
    );
  }
}

export default App;
