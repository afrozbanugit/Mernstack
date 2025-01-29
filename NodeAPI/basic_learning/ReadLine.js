let readlineObj = require('readline');
let rl = readlineObj.createInterface({
    input : process.stdin, output : process.stdout
});

rl.on('line',(line)=>{
    console.log(line);
    rl.close();
})

rl.on('close',()=>{
    console.log("Read line closed");
})