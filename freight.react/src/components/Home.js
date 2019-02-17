import React, { Component } from 'react'
import fire from '../config/firebase';
import Truck from '../img/freightPic2.jpg';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.signOut = this.signOut.bind(this);
        //<img className="backgroundImg" src={Truck} alt="truck"></img>
    }

    signOut(){
        fire.auth().signOut();
    }
  render() {
    return (
      <div>
            <header>
                <div className="headerWrap">
             
                    <h2 className="headerText">Ship the Freight Way</h2>
   
                    <button id="headerButton1" className="btn header_button">Hire a Freight Company</button>
                    <button id="headerButton2" className="btn header_button">Register Your Company</button>
                </div>
            </header>

            <h1>WERE KILLIN THIS SHIT HOMEEEE</h1>
            <h2>Hello {this.props.user}</h2>
            <button onClick={this.signOut}>Log Out</button>
      </div>
    )
  }
}
