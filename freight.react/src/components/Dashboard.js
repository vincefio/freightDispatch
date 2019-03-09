import React, { Component } from 'react'
import firebase from 'firebase'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      myOrders: [],
    }
  }

  componentDidMount(){
    //get current orders from db
    var database = firebase.firestore();
    //console.log(this.props.user.uid)
    //var docRef = database.collection('orders').doc(this.props.user.uid);

    database.collection("orders").where("userUid", "==", this.props.user.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            var data = doc.data()

            this.setState(prevState => ({
              myOrders: [...prevState.myOrders, data]
            }))
            //console.log('state ' + JSON.stringify(this.state))
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>
      </div>
    )
  }
}
