const express=require('express')
//import mongoose from 'mongoose'
const mongoose =require('mongoose')
//import cors from 'cors'
//import Card from './card.mjs'
const cors=require('cors');
const Card =require('./card')
const app=express()
const port=3000;
//
const connection =
    'mongodb+srv://akshaysutar8860:eTYsI1FvuSuMxTTz@cluster0.n8qtr.mongodb.net/Mernstack?retryWrites=true&w=majority';

mongoose
    .connect(connection, { useNewUrlParser: true })
    .then((res) => {
        console.log('connection succesfull....for webapp');
    })
    .catch((err) => {
        console.log('sorry error occures in connection......');
    });

//***************** */

//middlewears
app.use(express.json());
app.use(cors());
//******* */

app.get('/',(req,res)=>{

    res.send("all is well..... this is iupdated")
})
app.get('/card', (req, res) => {
    Card.find((err,data) => {
        if (err) {
            console.log('data fetched error..')
        }
        else {
            res.send(data)
        console.log(data[0])
            console.log("datasent")
        }
    })

})

app.listen(process.env.PORT||port,()=>{
    console.log(`app listening on port ${port}`)
})