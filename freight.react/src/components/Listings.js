import React, { Component } from 'react'

export default class Listings extends Component {
  constructor(props){
    super(props)
    console.log(this.props.user.uid)
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container">
        <h1>LISTINGS</h1>
        <h3>Bid on orders</h3>
      </div>
    )
  }
}
