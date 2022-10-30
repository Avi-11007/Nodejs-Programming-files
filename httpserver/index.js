const http = require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if (req.url=="/") {
        res.end('Hello from the Home side');
    }
     else if (req.url=="/about") {
        res.end('Hello from the About side');
    }
    else if (req.url=="/contact") {
        res.end('Hello from the contact side');
    }

     else if (req.url=="/userapi") {
        fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
            console.log(data);
            const objData=JSON.parse(data);
            res.end(objData[1]);
        });
        
    }

    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("404 Error \n <h1>Bhag Lamde </h1>");
    }

});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port number 8000");
});