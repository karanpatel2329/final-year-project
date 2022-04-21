import React, { Fragment, useState,useEffect } from 'react';
import { Container,Form,Button } from 'react-bootstrap';
import '../../../css/addSubject.css';
import axios from 'axios';
import { Dialog, DialogActions, TableRow, TableCell,Table  } from '@material-ui/core'
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
function AddSubjectMain({handleToggleSidebar}){
  const [subject,setSubject]=useState();
  const [subjectCode, setSubjectCode]=useState();
  const [subjectShort, setSubjectShort]=useState();  
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]); 
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
  const navigate = useNavigate();
  const onSubmit=event=>{  
    event.preventDefault();
    console.log(subject,subjectCode,subjectShort);
    const subjectJson = {
      name: subject,
      shortName:subjectShort,
      code:subjectCode
    };
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:3000",
      }
    };
  axios.post('http://localhost:3000/addSubject',  subjectJson , axiosConfig)
    .then(res => {
      if(res.data.data.length===0){
        handleClickToOpen();
      }else{
       handleToClose();
       getData();
      }
    
      
    }).catch(e=>console.log(e))
  }
  const getData=()=>{
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:300",
      }
    };
    var ls;
  axios.get('http://localhost:3000/getSubject', {},axiosConfig)
    .then(res => {
      console.log(res);
      setData(res.data);
  })};
  useEffect(() => {
    getData();
    },[]);
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
        <Table>
      <Fragment key={0}>
          <TableRow>
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
          <TableCell className='delete' align='center'><Button className='deleteBtn' onClick={()=>deleteSub(subject._id)}><FaTrashAlt color='red'/></Button></TableCell>
        </TableRow>
      </Fragment>
      ))}
      </Table>
      </div>
        <Button onClick={()=>setOpen(true)}>ADD Subject</Button>
       
    {open?<Dialog open={open} onClose={ () => setOpen(false) } fullWidth maxWidth="lg"> <Container>
    
    <Form className="subjectForm lg-12 md-12" onSubmit={onSubmit}>
    <center><h1>Add Subject</h1></center>
        <Form.Group className="mb-6" controlId="formBasicSubjectName">
            <Form.Label>Subject Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" onChange={e=>setSubject(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-6" controlId="formBasicSubjectShortName">
            <Form.Label>Subject Short Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject Short Name" onChange={e=>setSubjectShort(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-6" controlId="formBasicSubjectCode">
            <Form.Label>Subject Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject Code" onChange={e=>setSubjectCode(e.target.value)}/>
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