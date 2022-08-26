const express = require('express');
const path = require('path'); //เรียกหา file เพื่อส่ง res
const users = require('./user');
const moment = require('moment');
const app = express();


const logger = (req,res,next) => {
    console.log('Hello! keep log');
    console.log(req.protocol + ':' + req.get('host') + ':' + req.originalUrl);
    console.log(moment().format());
    next();
}

// Init Middleware
app.use(logger);

//set rount static
//app.use(express.static(path.join(__dirname, 'public'))); //เรียก file แบบ static 

//create rount Get API
app.get('/api/users',(req, res) => {
    res.json(users);
});


//set rount path api
//app.get('/',(req, res) => {
    //res.send('Hello,Express');
    //res.sendFile(path.join(__dirname, 'public','index.html'));    //เรียกหา file เพื่อส่ง res 'public' คือ folder
//})

const PORT = process.env.PORT || 5000;    //set port serach n't port use 5000

app.listen(PORT,()=> console.log('server is running on port ' + PORT));       // listen on port