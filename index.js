const express=require("express");
const port=8000;
const app=express();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)    
})