import React, { Component } from 'react'
import firebase from 'firebase'
import M from 'materialize-css'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      myOrders: [],
    }
  }

  componentDidMount(){
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
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
    const myOrders = this.state.myOrders.map(order => 
      <li key={order.receiverCompanyName}>
      <div class="collapsible-header">PickUp Date: {order.pickUpDate}</div>
      <div class="collapsible-body">
      <span>{order.myCompanyName + ' to ' + order.receiverCompanyName}</span>
      <div>Status: </div>
      </div>
    </li>
    )

    return (
      <div className="container">
        <h1>DASHBOARD</h1>
        <h3>My Outstanding Orders</h3><span>Click to expand</span>
        <ul className="collapsible">
          { myOrders }
        </ul>

      </div>
    )
  }
}
