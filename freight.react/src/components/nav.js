import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import M from 'materialize-css'

export default class Nav extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });

    }

    render() {
        return (
            <div>
                <nav className='blue'>
                    <div className="nav-wrapper">
                        <a className="logo">Freight Shipper</a>
                        <ul id="nav-mobile" className="right ">

                           
                        <li className="hide-on-med-and-down">Home</li>
                         <li className="hide-on-med-and-down">New Project</li>
                        <li className="hide-on-med-and-down">Study</li>
                            <a className='dropdown-trigger hide-on-large-only' href='#' data-target='dropdown1'><i className='material-icons'>dehaze</i></a>
                        </ul>

                        <ul id='dropdown1' className='dropdown-content'>
                            <li className="">Home</li>
                            <li className="">New Project</li>
                            <li className="">Study</li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}
