import React, { Component } from 'react';
import fire from './config/firebase.js'
import './App.css';
import Nav from './components/Nav.js';
import Login from './components/Login.js';
import Home from './components/Home.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ user });
      }else{
        this.setState({ user: null })
      }
    })
  }
  
  render() {
    return (
      <div className="App">
          <Nav />
            {this.state.user ? (<Home user={this.state.user.email}/>) : (<Login />)}
 
      </div>
    );
  }
}

export default App;
