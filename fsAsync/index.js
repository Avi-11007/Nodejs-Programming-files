const fs=require("fs");

fs.writeFile("readme.txt","Today is awesome day",(err)=>{ 
    console.log("file is created :)");
    console.log(err);
})