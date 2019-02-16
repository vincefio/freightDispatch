import React, { Component } from 'react'


export default class Nav extends Component {
    componentDidMount() {


    }

    render() {
        return (
            <div>
                <h1>LOGIN FORM</h1>
                <div class="container">
                <form>

                <div class="input-field col s12">
                    <input placeholder="Email" id="email" type="email" class="validate"></input>
                    <label for="email">Email</label>
                 </div>
                 <div class="input-field col s12">
                    <input id="password" type="password" class="validate"></input>
                    <label for="password">Password</label>
                </div>
                </form>
                </div>
            </div>
        )
    }
}
