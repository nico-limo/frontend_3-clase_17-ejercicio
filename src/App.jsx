import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import About from './components/About'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/:pokemon" component={Pokemon} />
                    {/* Bonus Extra: Ruta para los movimientos */}
                </Switch>

            </BrowserRouter>
        )
    }
}
