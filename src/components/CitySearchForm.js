import { Component } from 'react';
import { Button, Container, Col, Form, InputGroup, Row } from 'react-bootstrap';

class CitySearchForm extends Component {
    render() {
        return (
            <>
                {/* <InputGroup className="mb-3">
                    <Form onSubmit={this.props.getCityData}>
                        <Form.Control
                            type="text"
                            placeholder="Search for a city..."
                            aria-label="Search for a city..."
                            aria-describedby="basic-addon2"
                            onInput={this.props.handleCityInput}
                        />                    </Form>
                        <InputGroup.Text
                            id="basic-addon2">
                            <Button column sm="8" type="submit">Explore!</Button>
                        </InputGroup.Text>

                </InputGroup> */}
                <Row>
                    <Col md="auto">
                        <Form onSubmit={this.props.getCityData}>
                            <Form.Group as={Row} className=".mx-auto">
                                <Form.Control type="text" placeholder="Search for a city..." onInput={this.props.handleCityInput} />
                                <Col md="auto"><Button column sm="8" type="submit">Explore!</Button></Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    }
}

export default CitySearchForm;