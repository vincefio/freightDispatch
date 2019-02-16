import React, { Component } from 'react'
import firebase from 'firebase'

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login(e){
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error ' + error)
            // ...
          });
    }

    componentDidMount() {


    }

    handleSubmit(event){

    }

    render() {
        return (
            <div>
                <h1>LOGIN FORM</h1>
                <div className="container">
                <form onSubmit={this.handleSubmit}>

                <div className="input-field col s12">
                    <input value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" id="email" type="email" className="validate"></input>
                    
                 </div>
                 <div className="input-field col s12">
                    <input value={this.state.password} onChange={this.handleChange} name="password" id="password" type="password" className="validate"></input>
                    
                </div>
                <button id='flashcard-submit' onClick={this.login} className="btn waves-effect waves-light submitButton" value="Submit">Login</button>
                <button id='flashcard-submit' onClick={this.signup} className="btn waves-effect waves-light submitButton" >Sign Up</button>
                </form>
                </div>
            </div>
        )
    }
}
