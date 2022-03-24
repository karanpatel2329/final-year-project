import React from 'react'
import '../css/registration.css'
import Registercomp from '../mycomponents/Registercomp'
import Nav from '../mycomponents/Navcomp'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function RegistrationPage() {
  return (
    <>
        <Nav/>
        <Registercomp/> 
    </>
  )
}

export default RegistrationPage
