import React from 'react';
import axios from 'axios';
import CitySearchForm from './CitySearchForm';

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
    generateCityMapURL = function(KEY=REACT_APP_LOCATIONIQ_API_KEY,lat=this.state.cityData.lat, lon=this.state.cityData.lon, zoom=18, size='300x300', format='png') {
        return `https://maps.locationiq.com/v3/staticmap?key=${KEY}&center=${lat},${lon}&zoom=${zoom}&${size}&format=${format}`
    }
    console.log(this.generateCityMapURL())
    render() {
        return (
            <>
                <h2>City Data</h2>
                <CitySearchForm
                    getCityData={this.getCityData}
                    handleCityInput={this.handleCityInput}
                />
                {
                    this.state.error
                    ? <p>{this.state.errorMsg}</p>
                    : <>
                    <p>City Name: {this.state.cityData.display_name}</p>
                    <p>Latitude: {this.state.cityData.lat}</p>
                    <p>Longitude: {this.state.cityData.lon}</p>
                    <p>Icon: {this.state.cityData.icon}</p>
                    <p>Map: {</p>
                    </>
                }
            </>
        )
    }
}


export default Main;