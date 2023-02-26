import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';

const SystemRecordForm = () => {
  return (
    <Container>
    <Paper>
      <Heading>
        {'System Records'}
      </Heading>
      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Municipality</Form.Label>
            <Form.Control type="email" placeholder="Santa Clara" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Row>
        <Row>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>1st Address Line</Form.Label>
            <Form.Control type="text" placeholder="120 Miner Ave W" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>2nd Address Line</Form.Label>
            <Form.Control type="text" placeholder="PO Box 431" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formGridCity" className="col col-sm-4 col-xs-12">
            <Form.Label>City</Form.Label>
            <Form.Control className="form-control" type="text" name="city" value="" placeholder="San Jose" onChange="{handleChange}" />
          </Form.Group>
          <Form.Group controlId="formGridState" className="col col-md-4 col-xs-12">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="CA" className="form-control" name="a_state" value="" placeholder="CA" onChange="{handleChange}">
              <option value="CA">Choose...</option>
              <option value="Delhi">Delhi</option>
              <option value="Bombay">Bommbay</option>
              <option value="New York">New York</option>
              <option value="Kashmir">Kashmir</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formGridpin" className="col col-md-4 col-xs-12">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control className="form-control" type="pin" name="pin" value="" placeholder="5848" onChange="{handleChange}" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formGridpin" className="col col-md-4 col-xs-12">
            <Form.Label>Country</Form.Label>
            <Form.Control className="form-control" type="pin" name="pin" value="" placeholder="USA" onChange="{handleChange}" />
          </Form.Group>
        </Row>
        <Row>
          <Col xs={3}>
            <Div>
          <Button variant="success" type="submit">
            Save
          </Button>
          </Div>
          </Col>
        </Row>

      </Form>
    </Paper>
    </Container>
  )
}
const Paper = styled.div`
background-color:#fff;
border-radius:15px;
padding:30px;
`;

const Heading = styled.h2`
color:rgba(0,0,0,0.6);
text-align:left;
padding-bottom:20px;
`;

const Div = styled.div`
padding-top:25px;
`;
export const Container = styled.div`

padding-top:25px;
padding-bottom:35px;
`;

export default SystemRecordForm

