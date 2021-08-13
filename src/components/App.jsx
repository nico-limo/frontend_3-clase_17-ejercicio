import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      pokemons: [], 
      loading: false
    }
  }

  update = (pokemon) => this.setState(pokemon)

  
  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
      .then(res => res.json())
      .then(data => {
        this.setState({loading: true,pokemons: data.results});
      })
      .catch(err => {
        this.setState({loading: false});
        alert(err.message)
      })
  }


  getPokemon = () => {
      if (this.state.pokemon[1]?.toString()?.length === 1) return `00${this.state.pokemon[1]}`
      if (this.state.pokemon[1]?.toString()?.length === 2) return `0${this.state.pokemon[1]}`
      if (this.state.pokemon[1]?.toString()?.length === 3) return `${this.state.pokemon[1]}`
  }

  getTypes = () => {
    let phrase;
    const {pokemon} = this.state;
    console.log(pokemon[2][0].type.name);
    if(pokemon[2].length === 1) return pokemon[2][0].type.name
    if(pokemon[2].length > 1) {
     for (let index = 0; index < pokemon[2].length; index++) {
       if(index === 0) phrase = pokemon[2][index].type.name
       if(index !== 0) phrase = `${phrase} and ${pokemon[2][index].type.name}`
     }
     return phrase
    }
  }

  render() {
    const {loading, pokemons, pokemon} = this.state;
    return loading ? (
      <div style={{display:"flex"}}>
      <div className="container">
        { pokemon.length ? 
        (
          <>
           <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={pokemon[0]} />
            <p id="name">{`${pokemon[0]} is a pokemon type ${this.getTypes()}`}</p>
          </>
        ) : null
        }
      </div>
      <Pokedex updateParent={this.update} pokemons={pokemons} />
    </div>
    ) : null
  }
}


