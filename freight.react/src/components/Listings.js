import React, { Component } from 'react'
import firebase from 'firebase'
import M from 'materialize-css'
import axios from 'axios'

export default class Listings extends Component {
  constructor(props){
    super(props)
    console.log(this.props.user.uid)
    this.state = {
      orders: [],
      orderIds: [],
      userUid: this.props.user.uid,
    }
  }

  componentDidMount = () => {

    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
    //find all listings from the orders table
    //sort all without the userUid of the current user this.props.user.uid, this will happen locally/
    var db = firebase.firestore()

    db.collection("orders").get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          this.setState(prevState => ({
            orders: [...prevState.orders, doc.data()],
            orderIds: [...prevState.orderIds, doc.id]
          }))
         // console.log(this.state)
      });
      console.log(this.state)    
  });
  
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit hit ' + event.target.name)
  }

  render() {
    
    //console.log(this.props.user.userUid)
    const orders = this.state.orders
    .filter((order) => 
      order.userUid !== this.state.userUid
    )
    .map((order, i) => 
      <li className="orderWrapper" name={i} key={i}>
      <h5 class="">PickUp Date: {order.pickUpDate}</h5>
      <div>Origin: {order.city}, {order.state}</div>
      <div>Destination: {order.receiverCity}, {order.receiverState}</div>
      <button name={i} onClick={this.handleSubmit} className="btn modal-trigger" href="#modal1">Deliver this order</button>
      </li>
    )

    var modal =  
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Confirm this order</h4>
        <p>Are you sure you want to make this delivery?</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
      </div>
    </div>

    return (
      <div className="container">
        <h1>LISTINGS</h1>
        <h3>Bid on orders</h3>
        <ul className="">
        { orders }
        { modal }
        </ul>
      </div>
    )
  }
}
