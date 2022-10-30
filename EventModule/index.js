const EventEmitter=require("events");

const event=new EventEmitter();

event.on("sayMyName",() =>{
    console.log("Your name is vinod");
});
event.on("sayMyName",() =>{
    console.log("Your name is chandra");
});

event.on("sayMyName",() =>{
    console.log("Your name is shekhar");
});
event.emit("sayMyName");