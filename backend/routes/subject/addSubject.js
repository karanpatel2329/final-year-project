const express = require('express');
const Subject = require('../../models/subject');
const router = express.Router();
router.post('/',async(req,res)=>{
    try{
        var query={
            code:req.body.code
        }; 
        var re = await Subject.findOne(query)
        code =req.body.code;
        if(!re){
            var subject = new Subject(req.body);
            subject.save().then(()=>{
            return res.send({"data":subject,"error":""});
         });
        }else{
            Subject.updateOne({_id:re._id},{$set:{"name":req.body.name,"shortName":req.body.shortName}},{upsert:true}).then(e=> res.send({"data":subject,"error":""})).catch(e=>console.log(e));
            
        }
    }
    catch(e){
        return res.send({"data":"","error":"Some Error Occured"});
    }
});
module.exports =router;