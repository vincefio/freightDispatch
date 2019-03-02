import React, { Component } from 'react'
import firebase from 'firebase'


export default class RegisterCompany extends Component {
  constructor(props){
    super(props)
    this.state = {
      registerCompanyName: '',
      registerCompanyAddress: '',
      registerCompanyCity: '',
      registerCompanyState: '',
      registerCompanyZip: ''
    }
  }

  componentDidMount(){
     // Get a reference to the database service
    //var database = firebase.database();
    var database = firebase.firestore();
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  } 


  render() {
    
    return (
      <div className="container">
        <h3>REGISTER COMPANY</h3>
          <label for="registerCompanyName">Company Name</label>
          <input onChange={this.handleChange} name="registerCompanyName" id="registerCompanyName" className="" type="text"></input>
          <label for="registerCompanyAddress">Address</label>
          <input onChange={this.handleChange} name="registerCompanyAddress" id="registerCompanyAddress" className="formInput" type="text"></input>

          <label for="registerCompanyCity">City</label>
          <input onChange={this.handleChange} name="registerCompanyCity" id="registerCompanyCity" className="formInput" type="text"></input>

          <label for="registerCompanyState">State</label>
          <input onChange={this.handleChange} name="registerCompanyState" id="registerCompanyState" className="formInput" type="text"></input>
   
          <label for="registerCompanyZip">Zip</label>
          <input onChange={this.handleChange} name="registerCompanyZip" id="registerCompanyZip" className="formInput" type="text"></input>

  
      </div>
    )
  }
}
