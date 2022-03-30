const express = require('express')
const bodyParser = require('body-parser')

var app = express()

app.use(express.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({extended: false}))

app.listen(2022, (result, err) => {
    if(err){
        console.log('Error in starting the server');
    }
    else{
        console.log('Server listening at port 2022');
    }
})