// modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

// middlewares
app.use(cors());
app.options('*', cors());
app.use(express.json());

// constants
const port = 5000;
const data = './data';
const imgSrc = 'https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif';
const result = [];


fs.readdir(data,(_ ,files) =>{
    files.forEach(file =>
    {
        var rawdata = fs.readFileSync('./data/' + String(file));
        var student = JSON.parse(rawdata);
        result.push(student);
        app.get('/api', (_ , res) =>
        {
            res.send(result);
        })
    });
});

app.get('/', ( _ , res) =>
{
    res.send(`<img src=${imgSrc} height="100%" width="100%"  />`);
});






app.listen(port, () => console.log(`Server post is ${ port }`));