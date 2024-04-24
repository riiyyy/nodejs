const express=require('express');
const http=require('http');
const fs=require('fs');
const app=express();
app.get('/form',(req,res)=>{
    fs.readFile('public')
})