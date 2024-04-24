const express=require('express');
const socketIO=require('socket.io');
const path=require('path');
const app=express();
const server=app.listen(3000,()=>{
    console.log("Server Started");
})
const io=socketIO(server);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'nodejs','index.html'));
})