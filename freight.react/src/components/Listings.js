import React, { Component } from 'react'
import firebase from 'firebase'
import M from 'materialize-css'
import axios from 'axios'

export default class Listings extends Component {
  constructor(props){
    super(props)
    //console.log(this.props.user.uid)
    this.state = {
      orders: [],
    }
  }

  componentDidMount = () => {

    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
    //find all listings from the orders table
    //sort all without the userUid of the current user this.props.user.uid, this will happen locally
    var db = firebase.firestore()

    db.collection("orders").get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          this.setState(prevState => ({
            orders: [...prevState.orders, doc.data()]
          }))
         // console.log(this.state)

          //   axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyAHYChLr27Si59VaccQ_gqUi_3gZO489ew')
          //   .then(function (response) {
          //     console.log(response);
          //   })
          //   .catch(function (error) {
          //     console.log(error);
          // });

      });
      console.log(this.state)
  });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit hit')
  }

  render() {
    const orders = this.state.orders.map(order => 
      <li className="orderWrapper" key={order.receiverCompanyName}>
      <h5 class="">PickUp Date: {order.pickUpDate}</h5>
      <div>Origin: {order.city}, {order.state}</div>
      <div>Destination: {order.receiverCity}, {order.receiverState}</div>
      </li>
    )

    return (
      <div className="container">
        <h1>LISTINGS</h1>
        <h3>Bid on orders</h3>
        <ul className="">
        { orders }
        </ul>
        <button onClick={this.handleSubmit} className="btn">Deliver this order</button>
      </div>
    )
  }
}
