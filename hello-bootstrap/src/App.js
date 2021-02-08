import React, { Component } from 'react';
import { Container, Row, Col, Media, Alert, Badge, Button, Breadcrumb, ButtonGroup, ButtonToolbar, Card, Carousel, Dropdown } from "react-bootstrap"

class App extends Component {
  render(){
    return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item ahref="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item ahref="/page">Page</Breadcrumb.Item>
      </Breadcrumb>
      <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"></img>
            <Carousel.Caption>
              <h3>Pesawat Murah</h3>
              <p>Tiket Pesawat Murah Bro!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"></img>
            <Carousel.Caption>
              <h3>Pesawat Murah</h3>
              <p>Tiket Pesawat Murah Bro!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"></img>
            <Carousel.Caption>
              <h3>Pesawat Murah</h3>
              <p>Tiket Pesawat Murah Bro!</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
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
      <Col>
        <Alert variant="primary">Anda Telah Berhasil Login</Alert>
      </Col>
      <Col>
        <h3>
        Login Anda Telah <Badge variant="secondary">Success</Badge>
        </h3>
        <Button variant="primary">Profile <Badge variant="light-8">8</Badge></Button>
      </Col>
      <Col>
        <Button variant="danger">Expired</Button>
        <ButtonToolbar>
          <ButtonGroup className="mr-2">
            <Button>Previews</Button>
          </ButtonGroup>
          
          <ButtonGroup className="mr-2">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
          <Button>Next</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Card style={{ width:"18rem"}} >
            <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"></Card.Img>
            <Card.Body>
              <Card.Title>Sate Klatak</Card.Title>
              <Card.Text>Sate Klatak Khas Jogja, Favorite gw..!</Card.Text>
              <Button variant="success">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="primary">Pilih Menu</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Sate Ayam</Dropdown.Item>
              <Dropdown.Item href="/">Sate Terwelu</Dropdown.Item>
              <Dropdown.Item href="/">Sate Klatak</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>Col 3</Col>
      </Row>
    </Container>
  );
}}

export default App;
