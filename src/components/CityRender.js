import React from 'react';
import axios from 'axios';
import CitySearchForm from './CitySearchForm';
import Image from 'react-bootstrap/Image'

const { REACT_APP_LOCATIONIQ_URL, REACT_APP_LOCATIONIQ_API_KEY, } = process.env;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationiq_search_url: `${REACT_APP_LOCATIONIQ_URL}&key=${REACT_APP_LOCATIONIQ_API_KEY}&q=`,
            city: '',
            cityData: [],
            error: false,
            cityMapURL: '',
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
            // DONE: Use the city that is in state, and call the location IQ API using axios
            let cityData = await axios.get(url);
            // DONE:  Take the return from axios and set that to state - 
            this.setState({
                cityData: cityData.data[0],
            })
            console.log(cityData.data[0]);
            this.generateCityMapURL()
        } catch (error) {
            this.setState({
                error: true,
                errorMsg: error.message,
            })
        }
    }
    generateCityMapURL = (KEY=REACT_APP_LOCATIONIQ_API_KEY,lat=this.state.cityData.lat, lon=this.state.cityData.lon, zoom=12, size='300x300', format='png') => {
        this.setState({
            cityMapURL: `https://maps.locationiq.com/v3/staticmap?key=${KEY}&center=${lat},${lon}&zoom=${zoom}&size=${size}&format=${format}`,
        }) 
    }
    render() {
        console.log(`City Map URL: ${this.state.cityMapUrl}`);
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
                    <p>Icon: <Image src={this.state.cityData.icon} alt='cityicon'/></p>
                    <p>Map: <Image src={this.state.cityMapURL} alt='Map of City'/></p>
                    </>
                }
            </>
        )
    }
}


export default Main;