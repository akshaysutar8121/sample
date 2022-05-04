const express=require('express')
const app=express()
const port=3000;

app.get('/',(req,res)=>{

    res.send("all is well.....")
})


app.listen(process.env.PORT||port,()=>{
    console.log(`app listening on port ${port}`)
})