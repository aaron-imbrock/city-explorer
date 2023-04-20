import React from 'react';
import axios from 'axios';

const { REACT_APP_LOCATIONIQ_URL, REACT_APP_LOCATIONIQ_API_KEY, } = process.env;

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
        this.setState({
            city: event.target.value,
        })
        console.log('state in the state handler', this.state.city);
    }
    // ** async/await - handle our promises - call back from axios
    getCityData = async (event) => {
        event.preventDefault();
        try {
            // DONE: define our url to pass to axios using the city in state
            const url = this.state.locationiq_search_url + `${this.state.city}`;
            console.log(url);
            // DONE: Use the city that is in state, and call the location IQ API using axios
            let cityData = await axios.get(url);
            // DONE:  Take the return from axios and set that to state - 
            this.setState({
                cityData: cityData.data[0],
            })
            console.log(cityData.data[0]);
        } catch (error) {
            this.setState({
                error: true,
                errorMsg: error.message,
            })
        }
    }
    render() {
        return (
            <>
                <h2>City Data</h2>
                <form onSubmit={this.getCityData}>
                    <label> Enter in a City name:
                        <input type="text" onInput={this.handleCityInput} />
                    </label>
                    <button type="submit">Explore!</button>
                </form>
                {
                    this.state.error
                    ? <p>{this.state.errorMsg}</p>
                    : <>
                    <p>City Name: {this.state.cityData.display_name}</p>
                    <p>Latitude: {this.state.cityData.lat}</p>
                    <p>Longitude: {this.state.cityData.lon}</p>
                    </>
                }
            </>
        )
    }
}


export default Main;