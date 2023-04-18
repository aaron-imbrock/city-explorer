import React from 'react';
import axios from 'axios';

const { REACT_APP_LOCATIONIQ_URL, REACT_APP_LOCATIONIQ_API_KEY,  } = process.env;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationiq_search_url: `${REACT_APP_LOCATIONIQ_URL}&key=${REACT_APP_LOCATIONIQ_API_KEY}&q=`,
            city: '',
            cityData: [],
            error: false,
        }
    }
    handleCityInput = (event) => {
        // console.log(event.target.value);
        this.setState({
            city: event.target.value,
        })
        console.log('state in the state handler', this.state.city);
    }
    // ** async/await - handle our promises - call back from axios
    getCityData = async (event) => {
        event.preventDefault();
        // TODO: define our url to pass to axios using the city in state
        const url = this.state.locationiq_search_url + `${this.state.city}`;
        console.log(url);
        // TODO: Use the city that is in state, and call the location IQ API using axios
        // let cityData = await axios.get(this.state.locationiq_search_url);
        let cityData = await axios.get(url);
        // TODO:  Take the return from axios and set that to state - 
        console.log(cityData.data);
        this.setState({
            cityData: cityData.data[0]
        })
        console.log(typeof(this.state.cityData))
    }
    render() {
        return (
            <>
            <h2>City Data</h2>
            <form onSubmit={this.getCityData}>
                {/* <button onClick={this.getPokemonData}>Catch Pokemon</button> */}
                <label>
                    <input type="text" onInput={this.handleCityInput}/>
                </label>
                <button type="submit">Explore!</button>
            </form>

            <ul>
                {this.state.cityData.map((city, idx) => <li key={idx}>{city.display_name}</li>)}
            </ul>
            </>
        )
    }
}

export default Main;