var mongoose=require('mongoose');
const Schema = require('mongoose').Schema;

var StudentSchema = new mongoose.Schema({
    USN: {
        type: String,
        required:true,
    },
    name: {
        type: String,
    },
    branch: {
        type: String,
    },
    sem: {
        type: Number,
    },
    subject:[{
        type: String
    }],
    dob:{
        type:String
    },
    attendence:{
        type: Schema.Types.ObjectId,
        ref: 'Attendance'
    },
    contactInfo:{
        address:{
            type:String,
        },
        mobileNo:{
            type:Number,
            length:10
        },
        parentMobileNo:{
            type:Number,
            length:10
        }
    },
    password:{
        type:String
    }
});
  
module.exports = mongoose.model(
    'student', StudentSchema, 'Student');