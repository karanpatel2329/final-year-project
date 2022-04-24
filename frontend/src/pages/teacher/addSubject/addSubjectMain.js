import React, { Fragment, useState,useEffect } from 'react';
import { Container,Form,Button } from 'react-bootstrap';
import '../../../css/addSubject.css';
import axios from 'axios';
import { Dialog, DialogActions, TableRow, TableCell,Table  } from '@material-ui/core'
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { FaTrashAlt,FaPencilAlt } from 'react-icons/fa';
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

function AddSubjectMain({handleToggleSidebar}){
  const [subject,setSubject]=useState();
  const [subjectCode, setSubjectCode]=useState();
  const [subjectShort, setSubjectShort]=useState();  
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]); 
  const [teacherList, setTeacherList] = useState([]);
  const [assignTeacher, setAssignTeacher] = useState([]);
  const [optionSelected , selectOptionSelected]= useState();
  const handleClickToOpen = () => {setOpen(true);};
  const handleToClose = () => {setOpen(false);};
  
  const deleteSub =(id)=>{
    console.log(id);
    const subjectJson = {
      _id: id,
    };
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:3000",
      }
    };
    console.log(subjectJson)
  axios.post('http://localhost:3000/deleteSubject',  {"_id":id} , axiosConfig)
    .then(res => {
      if(res.data.data.length===0){
        handleClickToOpen();
      }else{
        
        getData();
      }
    }).catch(e=>console.log(e))
  }
  const onEdit=(id)=>{
    console.log(id);
    const subjectJson = {
      _id: id,
    };
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:3000",
      }
    };
    console.log(subjectJson)
  axios.post('http://localhost:3000/getSubjectById',  {"_id":id} , axiosConfig)
    .then(res => {
      console.log(res.data[0]);
      setSubject(res.data[0].name);
      setSubjectCode(res.data[0].code);
      setSubjectShort(res.data[0].shortName);
      setOpen(true);
    }).catch(e=>console.log(e))
  }
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
  
      
  return (
    
    <main className='main'>
      <Dialog open={open} onClose={handleToClose}>
              <DialogTitle>{"Something went wrong"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please Try Later
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleToClose} 
                        color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
      
      </div>
      <div>
      <h1>Subject List</h1>
      
        <Table>
      <Fragment key={0}>
          <TableRow className='firstRow'>
            <TableCell className='index' align="left"><b> Index</b></TableCell>
            <TableCell className='question' align="left"><b>Subject Name</b></TableCell>
            <TableCell className='subjectCode' align="center"><b>Subject Code</b></TableCell>
            <TableCell className='marks' align="center"><b>Subject ShortName</b></TableCell>
            <TableCell className='delete' align='center'></TableCell>
          </TableRow>
        </Fragment>
      {data.map((subject,index)=>(
      <Fragment key={subject._id}>
        <TableRow key={subject._id}  justify="space-between">
          <TableCell className='index' align="left" >{ index}</TableCell>
          <TableCell className='question' align="left" dangerouslySetInnerHTML={ { __html: subject.name } }></TableCell>
          <TableCell className='subjectCode' align="center" >{ subject.code }</TableCell>
          <TableCell className='marks' align="center">{ subject.shortName }</TableCell>
          <TableCell className='delete' align='center'><Button className='deleteBtn' onClick={()=>deleteSub(subject._id)}><FaTrashAlt className='color' /></Button><Button className='deleteBtn' onClick={()=>onEdit(subject._id)}><FaPencilAlt className='color' /></Button></TableCell>
          <TableCell className='delete' align='center'></TableCell>
        </TableRow>
      </Fragment>
      ))}
      </Table>
      </div>
        <Button onClick={()=>setOpen(true)}>ADD Subject</Button>
       
    {open?<Dialog open={open} onClose={ () => setOpen(false) } fullWidth maxWidth="lg"> <Container>
    
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
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setSubjectCode(e.target.value)} value={subjectCode}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 2 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setSubjectCode(e.target.value)} value={subjectCode}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 3 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setSubjectCode(e.target.value)} value={subjectCode}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 4 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setSubjectCode(e.target.value)} value={subjectCode}/>
        </Form.Group>
        <Form.Group className="paddingTop" controlId="formBasicSubjectCode">
            <Form.Label>Module 5 Topic</Form.Label>
            <Form.Control type="text" placeholder="Separate each topic with common(Eg. Topic1, Topic2)" onChange={e=>setSubjectCode(e.target.value)} value={subjectCode}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>   
    </Container></Dialog>:<></> }
    </main>
  );
}

export default AddSubjectMain;