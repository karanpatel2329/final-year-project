const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();
router.post('/',auth,async(req,res)=>{
    res.send({'data':"It working"});
});

module.exports =router;