import React, { Component } from 'react'

const dateRegex = RegExp(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)

const formValid = formErrors => {
  let valid = true;
  console.log('form valid hit')
  Object.values(formErrors).forEach(val => {
    //val.length > 0 && (valid = false);
    if(val.length > 0){
      console.log('we have an error')
      valid = false;
    }
    
  })

  return valid;
}

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
        receiverPhone: '',
        specialInstructions: '',
        formErrors: {
          pickUpDate: '',
          myCompanyName: '',
          address: ''
        }
      }

      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
   //console.log(this.state)
   const { name, value } = event.target;
   let formErrors = this.state.formErrors;

   //console.log('name ' + name + ' value ' + value)

   switch(name){
     case 'pickUpDate':
        //console.log(value)
        formErrors.pickUpDate = dateRegex.test(value) ? '' : 'Please add a correct pickup date';
      break;
    case 'myCompanyName':
      formErrors.myCompanyName = value.length == 0 ? 'Please add a company name' : '';
      break;
    case 'address':
      formErrors.address = value.length == 0 ? 'Please add an address' : '';
      break;
    default:
      break;
   }

   this.setState({ formErrors, [name]: value }, () => console.log(this.state))
  }

//handle submit
  handleSubmit = e => {
    e.preventDefault();

    if(formValid(this.state.formErrors)){
      console.log('submitting form')
    }else{
      console.log('form invalid')
    }
  }


  render() {
    return (
      <div className="container">

       
<form onSubmit={this.handleSubmit} className="hireFormContainer">
      <div>
        <h3>My Information</h3>
          <label for="pickUpDate">Pick Up Date</label>
          <input onChange={this.handleChange} name="pickUpDate" id="pickUpDate" className="" type="text"></input>
          <label for="myCompanyName">Company Name</label>
          <input onChange={this.handleChange} name="myCompanyName" id="myCompanyName" className="formInput" type="text"></input>
          <label for="address">Address</label>
          <input onChange={this.handleChange} name="address" id="address" className="formInput" type="text"></input>
          <label for="city">City</label>
          <input onChange={this.handleChange} name="city" id="city" className="formInput" type="text"></input>
          <label for="state">State</label>
          <input onChange={this.handleChange} name="state" id="state" className="formInput" type="text"></input>
          <label for="zip">Zip</label>
          <input onChange={this.handleChange} name="zip" id="zip" className="formInput" type="text"></input>
          <label for="phone">Phone</label>
          <input onChange={this.handleChange} name="phone" id="phone" className="formInput" type="text"></input>
          <label for="email">Email</label>
          <input onChange={this.handleChange} name="email" id="email" className="formInput" type="text"></input>
          </div>

          <div>
        <h3>Receiver Information</h3>
          <label for="receiverCompanyName">Company Name</label>
          <input onChange={this.handleChange} name="receiverCompanyName" id="receiverCompanyName" className="formInput" type="text"></input>
          <label for="receiverAddress">Address</label>
          <input onChange={this.handleChange} name="receiverAddress" id="receiverAddress" className="formInput" type="text"></input>
          <label for="receiverCity">City</label>
          <input onChange={this.handleChange} name="receiverCity" id="receiverCity" className="formInput" type="text"></input>
          <label for="receiverState">State</label>
          <input onChange={this.handleChange} name="receiverState" id="receiverState" className="formInput" type="text"></input>
          <label for="receiverZip">Zip</label>
          <input onChange={this.handleChange} name="receiverZip" id="receiverZip" className="formInput" type="text"></input>
          <label for="receiverPhone">Phone</label>
          <input onChange={this.handleChange} name="receiverPhone" id="receiverPhone" className="formInput" type="text"></input>

          </div>

          <div>

          <h4>Special Instructions</h4>
          
          <textarea onChange={this.handleChange} name="specialInstructions" id="specialInstructions" className="formInput" type="text"></textarea>
          <button className="btn">button</button>
          </div>

          <div>
            <h4>Extra Services</h4>
          <p>
            <label>
              <input type="checkbox" />
              <span>Hazmat</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox"/>
              <span>Residential Delivery</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox"/>
              <span>Lift Gate At Delivery</span>
            </label>
          </p>
          </div>
          
          
        </form>



      </div>
    )
  }
}
