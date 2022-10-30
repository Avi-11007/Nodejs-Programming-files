const fs=require("fs");
//creating a new file
// fs.writeFileSync("read.txt","welcome to my channel");

// fs.writeFileSync("read.txt","avi , welcome to my channel");

fs.appendFileSync("read.txt","How are you?, i am fine thankuuu @@ ");

const buf_data=fs.readFileSync("read.txt");
org_data=buf_data.toString();

console.log(org_data);

fs.renameSync("read.txt","readandwrite.txt");