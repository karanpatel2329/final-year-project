import React, { Fragment, useState } from 'react';
import '../../../css/test.css'
import { Dialog, Button, TableRow, TableCell,  } from '@material-ui/core'
import '../../../css/dashboardMain.css';
import axios from 'axios';

import { Container } from 'react-bootstrap';
function QuestionSetMain({handleToggleSidebar,data}){
  const [open, setOpen] = useState(false);
  const [type, setType] = useState();
  const [subjectCode, setSubjectCode] = useState();
  const [question, setQuestion] = useState();
  const [mark, setMark] = useState();
  const [moduleNo, setModuleNo] = useState();
  const [topic, setTopic] = useState();
  const [rbtLevel, setRbtLevel] = useState();
  const [coNo, setCoNo] = useState();
  const [option,setOption] = useState([]);
  const [answerScheme, setAnswerScheme] = useState();
  const addQuestion=async()=>{
    const questModel = {
      "type":type,
      "subjectCode":subjectCode,
      "questionText":question,
      "marks":mark,
      "moduleNumber":moduleNo,
      "topic":topic,
      "rbtlevel":rbtLevel,
      "coNumber":coNo,
      "hasImage":false,
      "image":"",
      "option":option,
      "answerScheme":answerScheme
    }
    console.log(questModel);
     
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:3000",
      }
    };
  axios.post('http://localhost:3000/addQuestion', questModel , axiosConfig)
    .then(res => {
      console.log(res);
    }).catch(e=>console.log(e))
  };
  return (
    <main className='main'>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
      
      </div>
      <h1>Question Set Main</h1>
      <Button onClick={()=>{setOpen(!open); console.log(open)}}>Add Ques</Button>
      <div className='questionList'>
      <Fragment key={0}>
          <TableRow>
            <TableCell className='index' align="left"><b> Index</b></TableCell>
            <TableCell className='question' align="left"><b>Question</b></TableCell>
            <TableCell className='subjectCode' align="center"><b>Subject Code</b></TableCell>
            <TableCell className='marks' align="center"><b>Marks</b></TableCell>
          </TableRow>
        </Fragment>
      {data.map((ques,index)=>(

        <Fragment key={ques._id}>
          <TableRow key={ques._id}  justify="space-between">
            <TableCell className='index' align="left" >{ index}</TableCell>
            <TableCell className='question' align="left" dangerouslySetInnerHTML={ { __html: ques.questionText } }></TableCell>
            <TableCell className='subjectCode' align="center" >{ ques.subjectCode }</TableCell>
            <TableCell className='marks' align="center">{ ques.marks }</TableCell>
          </TableRow>
        </Fragment>
      ))}
      </div>
      {open?<Dialog open={open} onClose={ () => setOpen(false) } fullWidth maxWidth="lg">
      <Container > 
                <div className='sub-main'>
                    <h5>Add Question To Database</h5>
                    <div className='registerform'>
                    <div className="usn mb-3 row">
                        <label htmlFor="usn" class="col-sm-2 col-form-label">Type</label>
                        <div className="col-sm-10">
                        <select name='branch' className='branchname form-control rounded-pill' onChange={e=>setType(e.target.value)} >
                            <option value='subjective'>Subjective</option>
                            <option value='objective'>Objective</option>
                        </select>
                        </div>
                    </div>
                    <div className=" name mb-3 row">
                        <label htmlFor="subjectCode" class="col-sm-2 col-form-label">Subject Code</label>
                        <div className="col-sm-10">
                            <input type="text" class=" text1 form-control" id="subjectCode" onChange={e=>setSubjectCode(e.target.value)}/>
                        </div>
                    </div>
                    <div className=" sem mb-3 row">
                        <label htmlFor="sem" class="col-sm-2 col-form-label">Question</label>
                        <div className="col-sm-10">
                            <textarea id='address'  name='address' className='text1 form-control' onChange={e=>setQuestion(e.target.value)} ></textarea>
                        </div>
                    </div>
                    <div className=" sem mb-3 row">
                        <label htmlFor="sem" class="col-sm-2 col-form-label">Marks</label>
                        <div className="col-sm-10">
                            <input type="number" min='1' max='20' class=" text1 form-control" onChange={e=>setMark(e.target.value)} id="marks"/>
                        </div>
                    </div>
                    <div className=" sem mb-3 row">
                        <label htmlFor="sem" class="col-sm-2 col-form-label">Module No.</label>
                        <div className="col-sm-10">
                            <input type="number" min='1' max='5' class=" text1 form-control" onChange={e=>setModuleNo(e.target.value)} id="moduleNo"/>
                        </div>
                    </div>
                    <div className=" name mb-3 row">
                        <label htmlFor="topic" class="col-sm-2 col-form-label">Topic</label>
                        <div className="col-sm-10">
                            <input type="text" class=" text1 form-control" id="topic" onChange={e=>setTopic(e.target.value)}/>
                        </div>
                    </div>
                    <div className="usn mb-3 row">
                        <label htmlFor="usn" class="col-sm-2 col-form-label">RBT Level</label>
                        <div className="col-sm-10">
                        <select name='branch' className='branchname form-control' onChange={e=>setRbtLevel(e.target.value)} >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        </div>
                    </div>
                    <div className=" sem mb-3 row">
                        <label htmlFor="sem" class="col-sm-2 col-form-label">CO No.</label>
                        <div className="col-sm-10">
                            <input type="number" min='1' max='5' class=" text1 form-control" onChange={e=>setCoNo(e.target.value)} id="moduleNo"/>
                        </div>
                    </div>
                    {type==="objective"?<div className=" sem mb-3 row">
                        <label htmlFor="sem" class="col-sm-2 col-form-label">Objective Options</label>
                        <div className="col-sm-10">
                            <textarea id='address'  name='address' className='text1 form-control'onChange={e=>setOption([e.target.value])} ></textarea>
                        </div>
                    </div>:<></>}
                    <div className=" sem mb-3 row">
                        <label htmlFor="sem" class="col-sm-2 col-form-label">Answer Schema</label>
                        <div className="col-sm-10">
                            <textarea id='address'  name='address' className='text1 form-control' onChange={e=>setAnswerScheme(e.target.value)} ></textarea>
                        </div>
                    </div>
                    <button type="button" class=" submitbtn btn btn-primary" onClick={addQuestion}>Submit</button>

                    </div>
                </div>
                </Container>
            </Dialog>:<></>}
    </main>
  );
}

export default QuestionSetMain;