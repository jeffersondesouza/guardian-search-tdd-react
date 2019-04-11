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

/*
  Hello from the Guardian. Thank you for registering with the open platform. 
  A new key has been created for you:
   4f0dc017-ba27-4650-ba21-ea7b65fb88c6 
   
   You can try this key by accessing 
   https://content.guardianapis.com/search?api-key=4f0dc017-ba27-4650-ba21-ea7b65fb88c6 
   
   in your browser. For more details on how to use the open platform API, 
   check out the documentation available at 
   http://open-platform.theguardian.com/documentation/
*/