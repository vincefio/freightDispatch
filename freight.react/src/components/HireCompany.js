import React, { Component } from 'react'

export default class HireCompany extends Component {
  constructor(props){
    super(props)
      this.state = {
        pickUpDate: '',

      }
  }
  render() {
    return (
      <div className="container hireFormContainer">

       
<form>
        <h2>Create Shipment</h2>
          <label for="pickUpDate">Pick Up Date</label>
          <input value={this.state.pickUpDate} id="pickUpDate" className="formInput" type="text"></input>
        </form>
   
        <form>
        <h2>Create Shipment</h2>
          <label for="pickUpDate">Pick Up Date</label>
          <input value={this.state.pickUpDate} id="pickUpDate" className="formInput" type="text"></input>
        </form> 


      </div>
    )
  }
}
