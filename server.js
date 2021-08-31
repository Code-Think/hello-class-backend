const express = require('express')
const app = express()
const axios= require('axios')
require('dotenv').config()

    app.get('/hello', (req, res) => {
        res.send('Hello Class!,It Works!')
    })

    app.get('/images',(req,res)=>{
        axios({
            method: 'get',
            url: process.env.IMAGE_SOURCE,
        })
            .then(function (response) {
               res.send(response.data)
            });
    })


app.listen(process.env.PORT, () => {
    console.log(`Hi logs viewer , app is  listening at http://localhost:${process.env.PORT}`)
})