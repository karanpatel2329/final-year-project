// import React from 'react'
import {Container} from 'react-bootstrap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registercomp() {

    const [usn, setUSN] = useState();
    const [name, setName] = useState();
    const [sem, setSem] = useState();
    const [branch, setBranch] = useState();
    const [dob, setDob] = useState();
    const [mobile, setMobile] = useState();
    const [parentsmobile, setParentsmobile] = useState();
    const [password, setPassword] = useState();
    // const [gender, setGender] = useState();
    const [address, setAddress] = useState();
  
    const navigate = useNavigate()
  
    const handleSubmit = event => {
      event.preventDefault();
      console.log(usn,password,sem,branch,dob,mobile,parentsmobile,password);
      const user = {
          USN:usn,
          name:name,
          branch:branch,
          sem:sem,
          subject:[],
          dob:dob,
          contactInfo:{
              address:address,
              mobileNo:mobile,
              parentMobileNo:parentsmobile
          },
          password:password
      };
      let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "localhost:3000",
          }
        };
        axios.post('http://localhost:3000/studentRegistration',  user , axiosConfig)
            .then(res => {
              console.log(res.data);
              if(res.data.data.length===0){
              //   handleClickToOpen();
              }else{
                navigate('/');
              }
            
              
            })
  }
  return (
    <div className='main'>
    <Container className='registerconatiner'> 
    <div className='sub-main'>
        <h5>Student Registration</h5>
        <div className='registerform'>
        <div className=" usn mb-3 row">
            <label htmlFor="usn" class="col-sm-2 col-form-label">USN</label>
            <div className="col-sm-10">
                <input type="text" class=" text1 form-control rounded-pill" onChange={e=>setUSN(e.target.value)} id="usn"/>
            </div>
        </div>
        <div className=" name mb-3 row">
            <label htmlFor="name" class="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
                <input type="text" class=" text1 form-control rounded-pill" onChange={e=>setName(e.target.value)} id="name"/>
            </div>
        </div>
        <div className=" sem mb-3 row">
            <label htmlFor="sem" class="col-sm-2 col-form-label">Sem</label>
            <div className="col-sm-10">
                <input type="number" min='1' max='8' class=" text1 form-control rounded-pill" onChange={e=>setSem(e.target.value)} id="name"/>
            </div>
        </div>
        <div className="branch mb-3 row">
            <label htmlFor="branch" class="col-sm-2 col-form-label">Branch</label>
            <select name='branch' className='branchname' onChange={e=>setBranch(e.target.value)} >
                <option value='cse'>CSE</option>
                <option value='ise'>ISE</option>
                <option value='ece'>ECE</option>
                <option value='mec'>MEC</option>
                <option value='EEE'>EEE</option>
                <option value='civil'>CIVIL</option>
            </select>
        </div>
        <div className=" dob mb-3 row">
            <label htmlFor="dob" class="col-sm-2 col-form-label">DOB</label>
            <div className="col-sm-10">
                <input type="date" class=" text1 form-control rounded-pill" onChange={e=>setDob(e.target.value)} id="name"/>
            </div>
        </div>
        <div className=" gender mb-3 row" >
        <label htmlFor="gender" class="col-sm-2 col-form-label">Gender</label>
            <div className="col-2">
            <input type="radio" value="Male" name="gender"  /> Male
            </div>
            <div className="col-2">
            <input type="radio" value="Female" name="gender" /> Female
            </div>
        </div>
        <div className=" address mb-3 row">
            <label htmlFor="address" class="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
                <textarea id='address' name='address' className='addressfield' onChange={e=>setAddress(e.target.value)} ></textarea>
            </div>
        </div>
        <div className=" mobile mb-3 row">
            <label htmlFor="mobile" class="col-sm-2 col-form-label">Mobile</label>
            <div className="col-sm-10">
                <input type="tel" class=" text1 form-control rounded-pill" onChange={e=>setMobile(e.target.value)} id="name"/>
            </div>
        </div>
        <div className=" parents mb-3 row">
            <label htmlFor="parents" class="col-sm-2 col-form-label">Parents Mobile</label>
            <div className="col-sm-10">
                <input type="tel" class=" text1 form-control rounded-pill" onChange={e=>setParentsmobile(e.target.value)} id="name"/>
            </div>
        </div>
        <div className=" parents mb-3 row">
            <label htmlFor="password" class="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" class=" text1 form-control rounded-pill" onChange={e=>setPassword(e.target.value)} id="name"/>
            </div>
        </div>
        <button type="button" class=" submitbtn btn btn-primary" onClick={handleSubmit}>Submit</button>

        </div>
    </div>
    </Container>
</div>
  )
}

export default Registercomp
