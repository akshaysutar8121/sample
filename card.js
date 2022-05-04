//import mongoose from 'mongoose'
const mongoose =require('mongoose')


const cardScema=mongoose.Schema({
    name:String,
    url:String
})

module.exports=mongoose.model('users',cardScema)