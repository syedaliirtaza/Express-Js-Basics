const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const { nextTick } = require('process');
let app = express();


// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// })

// app.get('/css/styles.css', (req,res) => {
//     res.sendFile(path.join(__dirname, '../public/css/styles.css'));
// })
// lets now do this in easyway by using middleware 

//super spcial middleware logger
// app.use((req,res,next) => {
//     fs.appendFileSync('log.txt', `${req.url}\m`);
//     next();
// });

// app.get('/', (req,res) => {
//     res.send('hello jee');
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact-form', (req,res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    // console.log(req.body.email);
    res.send('thanyou');
});

app.use(express.static(path.join(__dirname,'../public')));

app.listen(3000);
