const fs=require('fs');
// const readableStream=fs.createReadStream('exaple.txt',{encoding: 'utf8',highWaterMark:64});

// readableStream.on('data',(chunk)=>{
//     console.log('recievd chunk o fdata');
//     console.log(chunk);
// });
// readableStream.on('end',()=>{
//     console.log('finished reading data from fike');
// });
// readableStream.on('error',(err)=>{
//     console.error('error reading data',err)
// });

//writing into a file
// const writeableStream=fs.createWriteStream('example.txt');
// const data='hello world';
// writeableStream.write(data);
// writeableStream.end();
// writeableStream.on('finish',()=>{
//     console.log('finished writing data to file');
// });
// writeableStream.on('error',(err)=>{
//     console.error(err);
// });
