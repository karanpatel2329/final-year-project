// import logo from './logo.svg';
import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Details from './mycomponents/Form';
import Nav from './mycomponents/Navcomp';
import SchoolImage from './school.png';
// import 'bootstrap/dist/css/bootstrap.css';
// import {Container, Row, Col} from 'react-bootstrap'



function App() {
  return (
    
    <>
      <Nav/>
      <Container className="container">
        <Row>
           <Col lg={6} md={12} sm={12} className="mx-auto d-none d-lg-block">
              <p className='para'>For an improved learning and teaching experience!</p>
              <img className="image" src={SchoolImage} alt="Logo" />;
           </Col>
           <Col lg={5} md={12} sm={12} className="mx-auto">
              <Details/>  
           </Col>    

        </Row>
      </Container>
     
    </>
      
  );
}

export default App;
