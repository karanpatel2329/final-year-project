import React from 'react'
import Details from '../../mycomponents/student/LoginComp';
import Nav from '../../mycomponents/student/Navcomp';
import SchoolImage from '../../assets/school.png';
import { useNavigate } from 'react-router-dom';
import '../../css/studentLogin.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";
function StudentLoginPage(){
   const navigate = useNavigate()
   useEffect(() => {
      var token = localStorage.getItem('token');
      if(token){
         navigate('/about');
      }
    });
    return (<>
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
export default StudentLoginPage;