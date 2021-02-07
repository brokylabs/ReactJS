import React, { Component } from 'react';
import { Container, Row, Col, Media } from "react-bootstrap"

class App extends Component {
  render(){
    return (
    <Container>
      <Row>
        <Col>
          <Media>
            <img 
            width={64}
            height={64}
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" 
            alt="Sate Klatak"
            className="mr-3"></img>
            <Media.Body>
              <h5>Sate Klatak</h5>
              <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.
              </p>
            </Media.Body>
          </Media>
        </Col>
        <Col>
        <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Sate Klatak Juga</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            </p>
        </Media.Body>
        </Media>
        </Col>
      </Row>
      <Row>
      <Col>Col 1</Col>
      <Col>Col 2</Col>
      <Col>Col 3</Col>
      </Row>
    </Container>
  );
}}

export default App;
