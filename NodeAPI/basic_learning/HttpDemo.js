let http = require('http');

let server = http.createServer();
let fs = require('fs');
let data = fs.readFileSync('./output.txt');

server.on('request',(request,response)=>{
    console.log("Server request received");
    const {url,headers,method} = request;
    console.log(url);
    console.log(headers);
    console.log(method);
    response.end(data);
})

server.listen(3000,'localhost',()=>{
    console.log("Server is listening on the port 3000");
});