import React from 'react'
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Details(){

    return(

        <>
        <Container className='form'>
            <Row>            
                <form>
            <h4>Welcome Back..</h4>
            <Col  lg={12} md={12} sm={12}>
                <input  type="email" className=" mail form-control rounded-pill " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Official Mail id'/>
            </Col>
            <Col lg={12} md={12} sm={12}>
                <input type="password" className=" password form-control rounded-pill" id="exampleInputPassword1" placeholder='Enter Your Password'/>
            </Col>
            <a className='forgetpass' href='/'>Forget Your Password?</a>
            <button type="submit" className="btn btn-primary ">Login</button>
                </form> 
            </Row>

        </Container>    
        </>  
    );
}

export default Details;