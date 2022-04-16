import React from 'react'
import '../../css/registration.css'
import Registercomp from '../../mycomponents/student/Registercomp'
import Nav from '../../mycomponents/student/Navcomp'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function RegistrationPage() {
  const navigate = useNavigate()
   useEffect(() => {
      var token = localStorage.getItem('token');
      if(token){
         navigate('/about');
      }
    });
  return (
    <>
        <Nav/>
        <Registercomp/> 
    </>
  )
}

export default RegistrationPage
