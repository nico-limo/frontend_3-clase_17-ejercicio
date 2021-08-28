import React, { Component } from 'react'
import "../styles/Home.css"
import axios from 'axios'
import { Link } from 'react-router-dom'


const urlPokemons = "https://pokeapi.co/api/v2/pokemon?limit=150"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      loading: false
    }
  }

  componentDidMount() {
    axios(urlPokemons)
      .then(res => {
        this.setState({ loading: true, pokemons: res.data.results });
      })
      .catch(err => {
        this.setState({ loading: false });
        alert(err.message)
      })
  }

  render() {
    const { loading, pokemons } = this.state;
    if (!loading) return <p>Cargando datos</p>
    console.log(pokemons);
    return (
      <div className="container">
        <h1>Bienvenido a <span className="dh">Digital</span><span className="pk">Poke</span><span className="dh">House</span> </h1>
        <div>
          <h4>Elige un pokemon para ver sus datos</h4>
          <div className="list">
              {pokemons.map((pokemon, index) => (
                // AREA DE TRABAJO
                <a key={index} href={`/${index + 1}`} >{pokemon.name}</a>
              ))}
          </div>
        </div>
      </div>
    )
  }
}


