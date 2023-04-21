import { Component } from 'react';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';

class CitySearchForm extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="auto">
                        <Form onSubmit={this.props.getCityData}>
                            <Form.Group as={Row} className=".mx-auto">
                                <Form.Control type="text" placeholder="Search for a city..." onInput={this.props.handleCityInput} />
                                <Col md="auto"><Button sm="8" type="submit">Explore!</Button></Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CitySearchForm;