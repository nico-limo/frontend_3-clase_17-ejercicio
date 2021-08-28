import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import About from './components/About'

export default class App extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Home />
            <About />
            {/* <Pokemon /> Esta ruta no va funcionar ya que recibe un parametro como props */}
            </>

            /* AREA DE TRABAJO
            En este punto deberan utilizar react router dom
            Arriba tenemos los componentes a utilizar, los mismos deben estar envueltos
            en los componentes de react router dom. Si no se acuerdan como era la estructura,
            miren el material previo o la documentacion de react router dom
            */ 

        )
    }
}
