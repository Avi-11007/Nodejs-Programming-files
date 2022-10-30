const fs=require("fs");
const bioData={
    name:"vinod",
    age:26,
    channel:"thapa technical", 
};

// const jsonData=JSON.stringify(bioData);

// const objData=JSON.parse(jsonData);
// console.log(objData);

const jsonData=JSON.stringify(bioData);

fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
});

fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(orgData);
    console.log(data);
})
