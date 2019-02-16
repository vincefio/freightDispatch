import React, { Component } from 'react'
import fire from '../config/firebase';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        fire.auth().signOut();
    }
  render() {
    return (
      <div>
            <h1>WERE KILLIN THIS SHIT HOMEEEE</h1>
            <h2>Hello {this.props.user}</h2>
            <button onClick={this.signOut}>Log Out</button>
      </div>
    )
  }
}
