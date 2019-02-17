import React, { Component } from 'react';
import fire from './config/firebase.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import RegisterCompany from './components/RegisterCompany.js'
import HireCompany from './components/HireCompany.js'

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
            {/* {this.state.user ? (<Home user={this.state.user.email}/>) : (<Login />)} */}
 
        {/* <Route exact path='/' component={Home} /> */}
        {
          !this.state.user &&
            <Route exact path='/login' component={Login} />
        }
        {
          this.state.user && 
            <Route exact path='/' component={Home} />
        }
        <Route exact path="/register" component={RegisterCompany} />
        <Route exact path="/hire" component={HireCompany} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
