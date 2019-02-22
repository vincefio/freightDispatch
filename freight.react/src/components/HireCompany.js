import React, { Component } from 'react'

export default class HireCompany extends Component {
  constructor(props){
    super(props)
      this.state = {
        pickUpDate: '',
        myCompanyName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        receiverCompanyName: '',

      }
  }
  render() {
    return (
      <div className="container hireFormContainer">

       
<form>
        <h3>My Information</h3>
          <label for="pickUpDate">Pick Up Date</label>
          <input value={this.state.pickUpDate} id="pickUpDate" className="formInput" type="text"></input>
          <label for="myCompanyName">Company Name</label>
          <input value={this.state.myCompanyName} id="myCompanyName" className="formInput" type="text"></input>
          <label for="address">Address</label>
          <input value={this.state.address} id="address" className="formInput" type="text"></input>
          <label for="city">City</label>
          <input value={this.state.city} id="city" className="formInput" type="text"></input>
          <label for="state">State</label>
          <input value={this.state.state} id="state" className="formInput" type="text"></input>
          <label for="zip">Zip</label>
          <input value={this.state.zip} id="zip" className="formInput" type="text"></input>
          <label for="phone">Phone</label>
          <input value={this.state.phone} id="phone" className="formInput" type="text"></input>
          <label for="email">Email</label>
          <input value={this.state.email} id="email" className="formInput" type="text"></input>
        </form>
   
        <form>
        <h3>Receiver Information</h3>
          <label for="receiverCompanyName">Company Name</label>
          <input value={this.state.receiverCompanyName} id="receiverCompanyName" className="formInput" type="text"></input>
          <label for="receiverAddress">Address</label>
          <input value={this.state.receiverAddress} id="receiverAddress" className="formInput" type="text"></input>
        </form> 


      </div>
    )
  }
}
