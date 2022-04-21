import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import '../../../css/paperGenMain.css';
import { jsPDF } from "jspdf";
function PaperGenMain({handleToggleSidebar,}){
  const [exam, setExam] = useState(1);
  const [subject, setSubject] = useState([]); 
  
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
      console.log(res.data);
      setSubject(res.data);
  })};
  useEffect(() => {
    getData();
    },[]);
  const generatePaper = ()=>{
    console.log("Generate Paper");
    const doc = new jsPDF();
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "localhost:300",
      }
    };
  axios.get('http://localhost:3000/generateQP?IA='+exam,{},  axiosConfig,)
    .then(res => {
      if(res.data){
        console.log(res.data);
        doc.text("HKBK College Of Engineering",70,10)
        doc.text("Internal Assignment - "+exam,80,20)
        
        var line = 30;
        for(var i in res.data){
          console.log(line);
          doc.text("M "+res.data[i].moduleNumber+"  "+parseInt(parseInt(i)+1)+". "+res.data[i].questionText, 10, line);
          doc.text(res.data[i].marks+"\n",180,line);
          line+=10;
        }
        doc.save("as.pdf");
      }
    
      console.log("Generate Paper");
      
    }).catch(e=>console.log(e))
  };
  return (
    <main className='main'>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
      
      </div>
      <h1>Paper Generator Main</h1>
      <div className="container">
        <div className="row paperGen">
          <div className="col-12 mb-3" >
            Select Subject
          </div>
            <div className='col-6'>
            <select onChange={(e)=>setExam(e.target.value)}>
              {subject.map((e)=>{
               return <option value={e.shortName} key={e.shortName}>{e.shortName}</option>
              })}
            </select>
            </div>
          <div className="col-12 mb-3" >
            Select Exam
          </div>
            <div className='col-6'>
            <select onChange={(e)=>setExam(e.target.value)}>
              <option value='1'>IA 1</option>
              <option value='2'>IA 2</option>
              <option value='3'>IA 3</option>
            </select>
            </div>
            <div className='col-12'>
              <Button onClick={generatePaper}>Generate Paper</Button>
            </div>
         
       </div>
        
      </div>
      

    </main>
  );
}

export default PaperGenMain;