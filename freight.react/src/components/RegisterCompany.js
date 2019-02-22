import React, { Component } from 'react'
import firebase from 'firebase'

export default class RegisterCompany extends Component {
  componentDidMount(){
     // Get a reference to the database service
    var database = firebase.database();

    database.ref('companies/' + 20).set({
      name: 'Johnson',
    });

    console.log(database.ref('companies/'))
  }

  render() {
    return (
      <div>
        <h1>REGISTER COMPANY</h1>
      </div>
    )
  }
}
