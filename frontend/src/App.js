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
import StudentLoginPage from './pages/student/studentLogin';
import AboutUsPage from './pages/aboutUs';
import RegistrationPage from './pages/student/registrationPage';
import TeacherLogin from './pages/teacher/teacherLogin';
import TeacherRegistration from './pages/teacher/registrationPage';
import Logout from './pages/logout';
import QuestionSet from './pages/teacher/question set/questionSet';
import Dashboard from './pages/teacher/dashboard/dashboard';
import PaperGen from './pages/teacher/paper generator/paperGen';
function App() {
  return (
    
    <>
     <Router>
     <Routes>
        <Route path="/" element={<StudentLoginPage />} />
        <Route path='/teacher' element={<TeacherLogin/>}/>
        <Route path='/teacherSignUp' element={<TeacherRegistration/>}/>
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/signup" element={<RegistrationPage/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path='/teacher/questionSet' element={<QuestionSet/>}/>
        <Route path='/teacher/dashboard' element={<Dashboard/>}/>
        <Route path='/teacher/paperGen' element={<PaperGen/>}/>
      </Routes>
      </Router>
    </>
      
  );
}



export default App;
