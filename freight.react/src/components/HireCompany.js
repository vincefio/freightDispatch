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
        receiverAddress: '',
        receiverCity: '',
        receiverState: '',
        receiverZip: '',
        receiverPhone: ''
      }

      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })

   //console.log(this.state)
  }

  render() {
    return (
      <div className="container hireFormContainer">

       
<form>
        <h3>My Information</h3>
          <label for="pickUpDate">Pick Up Date</label>
          <input onChange={this.handleChange} name="pickUpDate" id="pickUpDate" className="" type="text"></input>
          <label for="myCompanyName">Company Name</label>
          <input onChange={this.handleChange} id="myCompanyName" className="formInput" type="text"></input>
          <label for="address">Address</label>
          <input onChange={this.handleChange} id="address" className="formInput" type="text"></input>
          <label for="city">City</label>
          <input onChange={this.handleChange} id="city" className="formInput" type="text"></input>
          <label for="state">State</label>
          <input onChange={this.handleChange} id="state" className="formInput" type="text"></input>
          <label for="zip">Zip</label>
          <input onChange={this.handleChange} id="zip" className="formInput" type="text"></input>
          <label for="phone">Phone</label>
          <input onChange={this.handleChange} id="phone" className="formInput" type="text"></input>
          <label for="email">Email</label>
          <input onChange={this.handleChange} id="email" className="formInput" type="text"></input>
        </form>
   
        <form>
        <h3>Receiver Information</h3>
          <label for="receiverCompanyName">Company Name</label>
          <input onChange={this.handleChange} id="receiverCompanyName" className="formInput" type="text"></input>
          <label for="receiverAddress">Address</label>
          <input onChange={this.handleChange} id="receiverAddress" className="formInput" type="text"></input>
          <label for="receiverCity">City</label>
          <input onChange={this.handleChange} id="receiverCity" className="formInput" type="text"></input>
          <label for="receiverState">State</label>
          <input onChange={this.handleChange} id="receiverState" className="formInput" type="text"></input>
          <label for="receiverZip">State</label>
          <input onChange={this.handleChange} id="receiverZip" className="formInput" type="text"></input>
          <label for="receiverPhone">Phone</label>
          <input onChange={this.handleChange} id="receiverPhone" className="formInput" type="text"></input>
        </form> 


      </div>
    )
  }
}
