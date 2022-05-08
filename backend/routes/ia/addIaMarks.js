const express = require('express');
const Mark = require('../../models/marks');
const router = express.Router();
router.post('/',(req,res)=>{
    try{
        var question = new Mark(req.body);
            question.save().then(()=>{
            return res.send({"data":question,"error":""});
         });
    }
    catch(e){
        return res.send({"data":"","error":"Some Error Occured"});
    }
});
module.exports =router;