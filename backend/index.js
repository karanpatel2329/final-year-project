const express = require("express");
const app = express();
const studentRegistration = require('./routes/studentRegistration');
const studetLogin = require('./routes/studentLogin');
const studentProfile = require('./routes/studentProfile');
const teacherRegistration = require('./routes/teacherRegisteration');
const teacherLogin = require('./routes/teacherLogin');
const config = require('config');

const PORT = process.env.PORT||3000;
require('./controller/dbConnection');

if(!config.get('jwtPrivateKey')){
    console.log("JWT Key is not defined");
    process.exit(1);
}
app.use(express.json());

app.use('/studentRegistration',studentRegistration);
app.use("/studentLogin",studetLogin);
app.use("/teacherRegistration",teacherRegistration);
app.use("/teacherLogin",teacherLogin);
app.use("/profile",studentProfile);


app.listen(PORT, function () {
    console.log("Server Started and Running",PORT);
})