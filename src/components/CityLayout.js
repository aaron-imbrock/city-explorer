import { Component } from 'react';
import Image from 'react-bootstrap/Image'

class CityLayout extends Component {
    render() {
        return (
            <>
                <p>Icon: <Image src={this.state.cityData.icon} alt='cityicon' /></p>
                <p>City Name: {this.state.cityData.display_name}</p>
                <p>Map: <Image src={this.state.cityMapURL} alt='Map of City' /></p>
                <p>Latitude: {this.state.cityData.lat}</p>
                <p>Longitude: {this.state.cityData.lon}</p>
            </>
        )
    }
}

export default CityLayout;