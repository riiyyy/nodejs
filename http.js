const http=require('http'); //importing modules from node
const fs=require('fs');
// http.createServer((req,res)=>{
//     if(req.url=="/read"){
//     fs.readFile('server.html','utf8',(err,data)=>{
//         if(err){
//             console.error(err);
//             res.end("There was an error, check the console");
//         }else{
//             res.end(data); 
//         }
    
//     });
// }else if(req.url=="/write"){
//     const msg="Helloooooooooooooo";
//     fs.writeFile('example.txt',msg,'utf8',()=>{
//     if(err){
//         res.end("there was someeee error");
//     }else{
//         res.end("everythings okayyyy");
//     }
// });
// }
// }).listen(4000,()=>{
//     console.log("Server is running on port 4000");
// });  //create server method
//type url localhost:4000



// const http = require('http');

// const fs = require('fs');
//const server = http.createServer((req,res)=>{
    //     if(res.url="/"){
    //         try{
    //             const data = fs.readFileSync('data.json',);
    //             res.end(data);
    //         }catch(err){
    //             console.error(err);
    //             res.end('Internal Server Error');
    //         }
    //     }else{
    //         res.writeHead(404,{'Content-Type': 'text/plain'});
    //         res.end('Not Found');
    //     }
    // });
    // const port = 4000;
    // server.listen(port,()=>{
    //     console.log(`Server running http://localhost:${port}`);
    // })
    
//*event lisetning
const eventEmitter=require('events');
const myEmitter=new eventEmitter();
// //whenever event occurs, the code always executes
//  myEmitter.on('firstevent',(arg1,arg2)=>{
//      //event handler logic
//      console.log("event occured with arguments:",arg1,arg2);
//  });
// myEmitter.on('firstevent',eventHandler);
// //when we want function to be emitted only once
// myEmitter.once('firstevent',(arg1,arg2)=>{
//     //event handler logic
//     console.log('This listener will be executed only once.');
// });
const eventHandler=(args1,args2)=>{
    console.log('event occured with arguments',args1,args2);
};
myEmitter.on('firstevent',eventHandler);

for(var i=0;i<3;i++){
    myEmitter.emit('firstevent','Hello','Hii');
    if(i==2){
        myEmitter.removeListener('firstevent',eventHandler)
    }
}