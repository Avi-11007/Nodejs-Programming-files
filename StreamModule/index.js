const fs=require("fs");
const http=require("http");
const { ReadStream } = require("tty");

const server=http.createServer();

server.on('request',(req,res)=>{
    //1st way to stream
//     fs.readFile('input.txt',(err,data)=>{
//    if (err) {return console.error(err);}
//    res.end(data.toString());
//     });



//2nd way to stream
// const ReadStream=fs.createReadStream("input.txt");
// ReadStream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
// });
// ReadStream.on("end",()=>{
//     res.end();
// });

// ReadStream.on("error",(err)=>{
//    console.log(err);
//    res.end('file nahi hai bhai');
// });


//3rd way to stream
const ReadStream=fs.createReadStream("input.txt");
ReadStream.pipe(res);

});

server.listen(8000,"127.0.0.1");
