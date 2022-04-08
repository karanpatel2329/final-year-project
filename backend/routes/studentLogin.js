const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Student= require("../models/students");
const config = require("config");
router.post('/',async(req,res)=>{
    console.log(req.body.USN);
    try{
     let stud = await Student.findOne({USN:req.body.USN});
     console.log(stud);
     if(!stud){
         return res.send({
             'data':'',
             'error':'Student Usn is Not found'
         });
     }
     validatePassword = await bcrypt.compare(req.body.password,stud.password);
     if(!validatePassword){
        return res.send({
            'data':'',
            'error':'Wrong Password'
        });
     }else{
         
        token = stud.generateAuthToken();
        return res.send({
            'data':'Login Successfull',
            'token':token
        });
     }
     
    }catch(e){
        console.log(e);
       return res.send(e);
    }
});

module.exports =router;