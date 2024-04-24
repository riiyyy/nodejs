const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    //reading
        //res.end("Thisis your node js server");
        // if(req.url=="/"){
        //     fs.readFile('example.txt','utf-8',(err,data)=>{
        //         if(err){
        //             console.err(err);
        //         }
        //     res.writeHead(200,{'Content-Type':'text/plain'});
        //     res.end('File Content:'+ data);
        // })
        // }
    //writing
        const msg="i am writing into the file ig"
        if(req.url=="/"){
            fs.writeFile('example.txt',msg,'utf-8',(err)=>{
                if(err){
                    console.error(err);
                    res.end("internal server error");
                }
                res.end('File content'+msg);
            });
}
});
const port=4000;
server.listen(port,()=>console.log(`server is running on http://localhost${port}`));


const http = require('http');
const fs = require('fs');
const querystring=require('querystring');

http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile('form.html',(err,data)=>{
            if(err){
                console.error(err);
                res.end("Error , check Console.")
            }
            res.end(data);
        })
    }else if(req.url=="/save-json"){
        let body="";
        req.on('data',(chunk)=>{
            body+=chunk;
            console.log(body);
        })
        req.on('end',()=>{
            const newData=querystring.parse(body).data;
            console.log(newData);
        })
    }
}).listen(4002);