const express = require("express");
const Student= require("./models/students");
const app = express();
require('./controller.js/dbConnection');
app.use(express.json());

app.post('/studentRegistration',(req,res)=>{
       try{
        Student.create(req.body).then((response)=>{
            res.status(200).send("SuccessFull Request");
        }).catch((e)=>{
            res.status(400).send("error");
            //res.sendStatus(400).send("Bad Request");
        }
        );
       }catch(e){
           console.log(e);
           res.status(500).send(e);
       }
});

app.listen(3030, function () {
    console.log("Server Started and Running");
})