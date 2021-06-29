// const os = require('os');
// const fs = require("fs");
import fs from 'fs'

// // console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.arch())

fs.readFile("seconds.js", "utf8", (error, data) => {
    console.log(error, data);
} )