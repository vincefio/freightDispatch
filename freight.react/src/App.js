import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
         <h1>WERE KILLIN THIS SHIT</h1>
         <Login />
 
      </div>
    );
  }
}

export default App;
