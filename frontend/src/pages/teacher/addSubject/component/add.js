import React, { Fragment, useState,useEffect } from 'react';
import { Container,Form,Button } from 'react-bootstrap';
import '../../../../css/addSubject.css';
import axios from 'axios';
import { default as ReactSelect } from "react-select";

import { Dialog, DialogActions, TableRow, TableCell,Table  } from '@material-ui/core'
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { FaTrashAlt,FaPencilAlt } from 'react-icons/fa';
function AddComponent (){
    const [subject,setSubject]=useState();
  const [subjectCode, setSubjectCode]=useState();
  const [subjectShort, setSubjectShort]=useState();  
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]); 
  const [teacherList, setTeacherList] = useState([]);
  const [assignTeacher, setAssignTeacher] = useState([]);
  const [optionSelected , selectOptionSelected]= useState();
  const [mod1,setMod1]=useState();
  const [mod2,setMod2]=useState();
  const [mod3,setMod3]=useState();
  const [mod4,setMod4]=useState();
  const [mod5,setMod5]=useState();

  const handleClickToOpen = () => {setOpen(true);
    setSubject("");
    setSubjectCode("");
    setSubjectShort("");};
  const handleToClose = () => {setOpen(false);  };
  const onSubmit=event=>{  
    event.preventDefault();
    
    var assignTeacherId=[];
    assignTeacher.map(e=>{
      assignTeacherId.push(e.value);
    })
    const subjectJson = {
      _id:"",
      name: subject,
      shortName:subjectShort,
      code:subjectCode,
      assignTeacher:assignTeacherId
    };
    console.log(assignTeacherId);
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:3000",
      }
    };
    
    console.log("JSsssJkkkk");
  axios.post('http://localhost:3000/addSubject',  subjectJson , axiosConfig)
    .then(res => {
      console.log(res);
      console.log("JSsssJ");
      if(res.data==undefined){
        handleClickToOpen();
      }else{
       handleToClose();
       
      }
      getData();
      setSubject("");
    setSubjectCode("");
    setSubjectShort("");
     }).catch(e=>console.log(e))
  }
  const getData=()=>{
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:300",
      }
    };
  
  axios.get('http://localhost:3000/getSubject', {},axiosConfig)
    .then(res => {
      console.log(res);
      setData(res.data);
  })};
  useEffect(() => {
    getTeacherList();
    getData();
    
    },[]);
  const getTeacherList =()=>{
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:300",
      }
    };
    console.log("Hi");
    axios.get('http://localhost:3000/teacherList', {},axiosConfig)
    .then(res => {
      res.data.map(v=>{
        console.log("*");
        return teacherList.push({value:v._id,label:v.name})
      },);
    });
  };
    return(<Container class="container">
    
    <Form className="subjectForm lg-12 md-12" onSubmit={onSubmit}>
    <center><h1>Add Subject</h1></center>
        <Form.Group className="paddingTop" controlId="formBasicSubjectName">
            <Form.Label>Subject Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" onChange={e=>setSubject(e.target.value)} value={subject}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectShortName">
            <Form.Label>Subject Short Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject Short Name" onChange={e=>setSubjectShort(e.target.value)} value={subjectShort}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Subject Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject Code" onChange={e=>setSubjectCode(e.target.value)} value={subjectCode}/>
        </Form.Group>
        <Form.Group className="paddingTop">
          <Form.Label className='paddingRight'>Assign Teacher    </Form.Label>
          <span
        className="d-inline-block ml-6"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          onChange={e=>{setAssignTeacher([]); setAssignTeacher(e)}}
          options={teacherList}
          isMulti
          value={optionSelected}
        />
      </span>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 1 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setMod1(e.target.value)} value={mod1}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 2 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setMod2(e.target.value)} value={mod2}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 3 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setMod3(e.target.value)} value={mod3}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 4 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setMod4(e.target.value)} value={mod4}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 5 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setMod5(e.target.value)} value={mod5}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>   
    </Container>);

}
export default AddComponent;