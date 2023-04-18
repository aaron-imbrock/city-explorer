import React from 'react';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonData: [],
        }
    }

    // TODO: Make api call to pokemon api, then render the data in the re
    // render method;
    // ** async / await
    // 
    getPokemonData = async (event) => {
        event.preventDefault();
        // TODO: Use axios to help me make my API call
        // ** Axios.get() -> 1 arg = url of the api that I want to hit
        let pokemonData = await axios.get('https://pokeapi.co/api/v2/pokemon')
        let pokemonResults = pokemonData.data;
        console.log(pokemonData);
        console.log(pokemonResults);
        // ** .data - where axios stores the returned info
        // ** .results - where THIS API stores the actual pokemon data

        // TODO: store .results data in state
        this.setState({
            pokemonData: pokemonData.data.results,
        })
//         https://stackoverflow.com/a/71250760
//         @erick-silva answer is not complete and prone to error.

// The correct way to fetch an image for a specific pokemon is:

// Fetch from PokeAPI the info for that pokemon, say bulbasaur. -> GET https://pokeapi.co/api/v2/pokemon/bulbasaur
// Parse the returned JSON for the property .sprites, select the version we'd like to use and the variety for the sprite, say Pokemon Crystal front: .sprites.versions["generation-ii"].crystal.front_default
// Use the provided link and load the image: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png
// Using this method will ensure that you will always fetch the correct image in case the ids change or the name of the image isn't the id of the pokemon.
 }

    render() {
        return (
            <>
            <h2>Pokemon Data</h2>
            <form >
                <button onClick={this.getPokemonData}>Catch Pokemon</button>
            </form>

            <ul>
                {this.state.pokemonData.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)}
            </ul>
            </>
        )
    }
}

export default Main;
