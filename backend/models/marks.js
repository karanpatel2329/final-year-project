const mongoose = require('mongoose')
let Schema = mongoose.Schema

const markSchema = new Schema(
    {
        usn:String,
        exam:String,
        subject:String,
        questionAttend:{
            type:Number
        },
        totalQuestion:{
            type:Number
        },
        question:[
            {
                questionNo:Number,
                questionMark:Number,
                obtainMark:Number
            }
        ]
    }
)

module.exports = mongoose.model('Mark', markSchema)