import React from 'react';
import axios from 'axios';

import { Image, Container, Row, Col } from 'react-bootstrap';

import CitySearchForm from './CitySearchForm';
import generateCityMapURL from '../functions/generateMapURL';

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
            showData: false,
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
            // DONE: Move generateCityMapURL into it's own file and import it.
            const cityMapURL = generateCityMapURL(cityData.data[0]);
            this.setState({
                cityData: cityData.data[0],
                cityMapURL: cityMapURL,
                showData: true,
            },
                () => console.log(this.state.cityMapURL)
            )
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
                <CitySearchForm
                    getCityData={this.getCityData}
                    handleCityInput={this.handleCityInput}
                />
                {
                    this.state.error
                        ? <p>{this.state.errorMsg}</p>
                        : this.state.showData
                            // TODO: Move render into CityLayout.js
                            ? 
                            <Container>

                                <Row><Col className=".mx-auto" md="auto"><h3>{this.state.cityData.display_name}</h3></Col></Row>
                                <Row><Col md="auto"><Image src={this.state.cityMapURL} alt='Map of City' rounded fluid /></Col></Row>
                                <Row>
                                    <Col md="auto"><p>Latitude: {this.state.cityData.lat}</p></Col>
                                    <Col md="auto"><p>Longitude: {this.state.cityData.lon}</p></Col>
                                </Row>
                            </Container>
                            : <></>
                }
            </>
        )
    }
}

export default Main;