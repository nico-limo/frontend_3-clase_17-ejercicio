import React, { Component } from 'react'
import {  } from 'react-router-dom'

import "../styles/Navbar.css"

export default class Navbar extends Component {
    
    render() {
        
        return (
            <div className="navbar">
                {/* AREA DE TRABAJO */}
                 <a href="/">Home</a>
                 <a href="/about">About</a>
            </div>
        )
    }
}
