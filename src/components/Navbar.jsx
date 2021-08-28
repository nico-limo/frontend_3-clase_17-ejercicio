import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import "../styles/Navbar.css"

export default class Navbar extends Component {
    
    render() {
        const activeStyle = { color: 'red' };
        return (
            <div className="navbar">
                 <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                 <NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink>
            </div>
        )
    }
}
