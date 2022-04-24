const mongoose = require('mongoose')
let Schema = mongoose.Schema

const subjectSchema = new Schema(
    {
        name: {
            type:String,
            required:true
        }, 
        code: {
            type:String,
            required:true
        }, 
        shortName: {
            type:String,
            required:true
        }, 
        assignTeacher: [{ type: Schema.Types.ObjectId, ref: 'teachers' }]
    }
)

module.exports = mongoose.model('Subject', subjectSchema)