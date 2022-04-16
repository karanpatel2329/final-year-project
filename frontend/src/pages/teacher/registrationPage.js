import React from 'react'
import '../../css/registration.css'
import Registercomp from '../../mycomponents/teacher/Registercomp'
import Nav from '../../mycomponents/teacher/Navcomp'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function TeacherRegistrationPage() {
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

export default TeacherRegistrationPage
