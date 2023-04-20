import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class CitySearchForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.getCityData}>
                <Form.Group>
                    <Form.Label>Enter in a City name: </Form.Label>
                    <Form.Control type="text" onInput={this.props.handleCityInput} />
                </Form.Group>
                <Button type="submit">Explore!</Button>
            </Form>
        )
    }
}

export default CitySearchForm;