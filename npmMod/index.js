const chalk= require("chalk");
const validator=require("validator");
console.log(chalk.blue("Hello World !!"));

const res=validator.isEmail("avi@avi.com");
console.log(res? chalk.green.inverse(res):chalk.red.inverse(res));