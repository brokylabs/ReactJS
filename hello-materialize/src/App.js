import React, { Component } from 'react';
import { Button, Card, CardTitle, Col, Row } from "react-materialize"

class App extends Component {
  render (){
    return (
     <div>
       <h3>Hello React Materialize</h3>
  
       <Button>Login</Button>
       <Row>
         <Col m="4">
            <Card className="green" title="Materialize Card" header={<CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">Fun</CardTitle>}>Tees</Card>
         </Col>
         <Col m="4">
            <Card className="green" title="Materialize Card" header={<CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">Fun</CardTitle>}>Tees</Card>
         </Col>
         <Col m="4">
            <Card className="green" title="Materialize Card" header={<CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">Fun</CardTitle>}>Tees</Card>
         </Col>
       </Row>
     </div>
    );

  }
}

export default App;
