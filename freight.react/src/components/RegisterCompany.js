import React, { Component } from 'react'
import firebase from 'firebase'

export default class RegisterCompany extends Component {
  componentDidMount(){
     // Get a reference to the database service
    //var database = firebase.database();
    var database = firebase.firestore();

    /*database.collection("companies").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });*/

    /*database.ref('companies/' + 20).set({
      name: 'Johnson',
    });

    console.log(database.ref('companies/'))*/

  //MAKE A CLASS FOR A NEW COMPANY?  
  }

  render() {
    return (
      <div>
        <h1>REGISTER COMPANY</h1>
      </div>
    )
  }
}
