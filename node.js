const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const { chunk } = require('lodash');

http.createServer((req,res)=>{
    if(req.url="/"){
        fs.readFile('json.html',(err,data)=>{
            if(err){
                console.error(err);
            }
            res.end(data);
        })
    }
    else if(req.url='/savE-json'){
        let body=" ";
        req.on('data',(chunk)=>{
            body+=chunk;
            console.log(body);
        })
        req.on('end',()=>{
            const neww=querystring.parse(body).data;
            console.log(neww);
        })
    }
    
}).listen(4000);