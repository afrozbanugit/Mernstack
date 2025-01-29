let fsobj = require('fs');


let content = `Today is ${new Date()}`;
let writeToFile = fsobj.writeFileSync('./output.txt', content);

let readFromfile =fsobj.readFileSync('./output.txt','utf-8')
console.log(readFromfile);