import React, { useState } from 'react';
import SideNavBar from '../../../mycomponents/teacher/sidebar';
import QuestionSetMain from './questionSetMain';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../../css/test.css'
import { useEffect } from "react";
import axios from 'axios';
function Layout() {
  const [toggled, setToggled] = useState(false);
  const [question, setQuestion] = useState([]); 
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  useEffect(() => {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:300",
      }
    };
  axios.get('http://localhost:3000/getQuestion', {},axiosConfig)
    .then(res => {
      console.log(res);
      setQuestion(res.data);
    }).catch(e=>console.log(e));
   
  },[]);
  return (
    <div className={`app${toggled ? 'toggled' : ''}`}>
      <SideNavBar
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <QuestionSetMain
        toggled={toggled}
        data={question}
        handleToggleSidebar={handleToggleSidebar}
       />
    </div>
  );
}

export default Layout;


