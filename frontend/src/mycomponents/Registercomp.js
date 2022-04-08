import React from 'react'
import {Container} from 'react-bootstrap'

function Registercomp() {
  return (
                <div className='main'>
                <Container className='registerconatiner'> 
                <div className='sub-main'>
                    <h5>Student Registration</h5>
                    <div className='registerform'>
                    <div className=" usn mb-3 row">
                        <label htmlFor="usn" class="col-sm-2 col-form-label">USN</label>
                        <div className="col-sm-10">
                            <input type="text" class=" text1 form-control rounded-pill" id="usn"/>
                        </div>
                    </div>
                    <div className=" name mb-3 row">
                        <label htmlFor="name" class="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" class=" text1 form-control rounded-pill" id="name"/>
                        </div>
                    </div>
                    <div className=" sem mb-3 row">
                        <label htmlFor="sem" class="col-sm-2 col-form-label">Sem</label>
                        <div className="col-sm-10">
                            <input type="number" min='1' max='8' class=" text1 form-control rounded-pill" id="name"/>
                        </div>
                    </div>
                    <div className="branch mb-3 row">
                        <label htmlFor="branch" class="col-sm-2 col-form-label">Branch</label>
                        <select name='branch' className='branchname' >
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
                            <input type="date" class=" text1 form-control rounded-pill" id="name"/>
                        </div>
                    </div>
                    <div className=" mobile mb-3 row">
                        <label htmlFor="mobile" class="col-sm-2 col-form-label">Mobile</label>
                        <div className="col-sm-10">
                            <input type="tel" class=" text1 form-control rounded-pill" id="name"/>
                        </div>
                    </div>
                    <div className=" parents mb-3 row">
                        <label htmlFor="parents" class="col-sm-2 col-form-label">Parents Mobile</label>
                        <div className="col-sm-10">
                            <input type="tel" class=" text1 form-control rounded-pill" id="name"/>
                        </div>
                    </div>
                    <div className=" parents mb-3 row">
                        <label htmlFor="password" class="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" class=" text1 form-control rounded-pill" id="name"/>
                        </div>
                    </div>
                    <button type="button" class=" submitbtn btn btn-primary">Submit</button>

                    </div>
                </div>
                </Container>
            </div>
  )
}

export default Registercomp
