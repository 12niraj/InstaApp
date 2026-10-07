import express from 'express'

const app= express();
app.listen('3005',(req,res)=>{
    console.log("listen on port ",3005);
    
})

