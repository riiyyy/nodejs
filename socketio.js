const express=require('express');
const socketIO=require('socket.io');
const path=require('path');
const app=express();
const server=app.listen(3000,()=>{
    console.log("Server Started");
})

app.use(express.static(path.join(__dirname,'../html')));

const io=socketIO(server);//single client using middleware

io.on('connection',(socket)=>{
    console.log("A user is connected");
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    });
    // socket.on('disconnect',()=>{
    //     console.log("a user has disconnected");
    // })
})