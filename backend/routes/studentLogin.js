const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Student= require("../models/students");
const config = require("config");
router.post('/',async(req,res)=>{
    try{
     let stud = await Student.findOne({USN:req.body.USN});
     if(!stud){
         return res.status(400).send({
             'data':'',
             'error':'Student Usn is Not found'
         });
     }
     validatePassword = await bcrypt.compare(req.body.password,stud.password);
     if(!validatePassword){
        return res.status(400).send({
            'data':'',
            'error':'Wrong Password'
        });
     }else{
         
        token = stud.generateAuthToken();
        return res.status(400).send({
            'data':'Login Successfull',
            'token':token
        });
     }
     
    }catch(e){
        console.log(e);
       return res.status(500).send(e);
    }
});

module.exports =router;