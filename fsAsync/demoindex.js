const fs=require("fs");

// fs.mkdir("Thapa",(err)=>{
//     console.log("folder is created");
// });

// fs.writeFile("Thapa/bio.txt","Hello,Abhishek Pandey Here","utf-8",(err)=>{
//     console.log("file is created");
// });

// fs.appendFile("Thapa/bio.txt","Radhe-Krishna","utf-8",(err)=>{
//     console.log("file appended");
// });

// fs.readFile("Thapa/bio.txt","utf-8",(err,data)=>{
//     console.log(data);
// });

// fs.rename("Thapa/bio.txt","Thapa/mybio.txt",(err)=>{
//     console.log("file renamed");
// })

fs.unlink("Thapa/bio.txt",(err)=>{
    console.log("file deleted");
})
fs.rmdir("Thapa",(err)=>{
    console.log("folder also deleted");
})