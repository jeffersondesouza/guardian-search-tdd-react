import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>The Guardian Serach App</h1>
        </header>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
