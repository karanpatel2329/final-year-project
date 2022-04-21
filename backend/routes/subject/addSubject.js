const express = require('express');
const Subject = require('../../models/subject');
const router = express.Router();
router.post('/',(req,res)=>{
    try{
        var subject = new Subject(req.body);
            subject.save().then(()=>{
            return res.send({"data":subject,"error":""});
         });
    }
    catch(e){
        return res.send({"data":"","error":"Some Error Occured"});
    }
});
module.exports =router;