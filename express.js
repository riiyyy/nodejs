const express=require('express');
const http=require('http');
const fs=require('fs');
const app=express();

// //route handler for homepage route
// app.get('/',(req,res)=>{
//     res.sendend("Hello World");
// })
// app.get('/',(req,res)=>{
//     res.send("Im the 2nd route hnadler");
// })
// //route handler for aboutME
// app.get('/aboutme',(req,res)=>{
//     res.send("this is about me");
// })

// app.listen(5000);

// app.get('/submit',(req,res)=>{
//     const name=req.query.name;
//     const email=req.query.email;
//     fs.writeFile('example.txt',`Name: ${name},Email: ${email}\n`,err=>{
//         if(err){
//             console.error('error saving data to file',err);
//             return res.status(500).send('error saving data');
//         }
//         res.send('data saved succesfully');
//     });
// });
// app.listen(3000,()=>{
//     console.log('servr is running on port 3000');
// });

//MIDDLEWARE

// app.use('/',(req,res,next)=>{
//     console.log("this is middleware function");
//     next();//call the next middleware fnc in stack
// });


// app.use('/aboutme',(req,res,next)=>{
//     console.log("this is middleware function 2");
//     next();//call the next middleware fnc in stack
// });


// //route handler
// app.get('/',(req,res)=>{
//     res.send("Hellooo");
// });
// //route handler
// app.get('/aboutme',(req,res)=>{
//     res.send("Hello");
// });
// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// });

//question

app.use((req,res,next)=>{
   console.log("this is middleware function 2");
   const logFilePath=__dirname +'/request.log';
   const logEntry=`${new Date().toISOString()}: ${req.method} ${req.url}\n`;
   fs.appendFile(logFilePath,logEntry,(err)=>{
    if(err){
        console.log('error writing into file:',err);
    }
   })
     next();//call the next middleware fnc in stack
 });

 app.get('/',(req,res)=>{
      const read=fs.createReadStream('server.html');
      read.pipe(res);
  });
  app.post('/submit',(req,res)=>{
    console.log(req.body);
 });
 

 app.use(express.urlencoded({extended: true}));
 app.listen(3000,()=>{
     console.log("server is running on port 3000");
 });



    