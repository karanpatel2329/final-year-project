// import logo from './logo.svg';
import React from 'react';
import './css/studentLogin.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  BrowserRouter
} from "react-router-dom";
import StudentLoginPage from './pages/studentLogin';
import AboutUsPage from './pages/aboutUs';

function App() {
  return (
    
    <>
     <Router>
     <Routes>
        <Route path="/" element={<StudentLoginPage />} />
        <Route path="/about" element={<AboutUsPage/>}/>
      </Routes>
      </Router>
    </>
      
  );
}



export default App;
