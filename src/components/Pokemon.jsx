import React, { Component } from 'react'
import axios from 'axios';
import "../styles/Pokemon.css"

export default class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : false,
            pokemon: {}
        }
    }

    componentDidMount() {
        // AREA DE TRABAJO
        // ¿Como podemos obtener el valor en la url
        axios(`https://pokeapi.co/api/v2/pokemon/$/*AQUI VA EL PARAMETRO de la URL*/`)
          .then(res => {
            this.setState({ loading: true, pokemon: res.data});
          })
          .catch(err => {
            this.setState({ loading: false });
            alert(err.message)
          })
      }

    render() {
        const { loading, pokemon } = this.state;
        if (!loading) return <p>Cargando datos</p>
        return (
            <div className="pokemon">
                <div className="datos">
                    <div className="fila">
                        <h5>Name:</h5>
                        <p>{pokemon.name}</p>
                    </div>
                    <div className="fila">
                        <h5>Height:</h5>
                        <p>{`${pokemon.height} Feet`}</p>
                    </div>
                    <div className="fila">
                        <h5>Weight:</h5>
                        <p>{`${pokemon.weight} Kg`}</p>
                    </div>
                    <div className="fila">
                        <h5>Abilities:</h5>
                        {pokemon.abilities.map(ability => <p id="array" key={ability.ability.name}>{ability.ability.name}</p>)}
                    </div>
                    <div className="fila">
                        <h5>Types:</h5>
                        {pokemon.types.map(type => <p id="array" key={type.type.name}>{type.type.name}</p>)}
                    </div>
                </div>
                <div className="image">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    {/* BONUS EXTRA: Hacer que el boton te lleve a otra pagina con todos los moves del pokemon */}
                    <button>Moves</button>
                </div>
            </div>
        )
    }
}
