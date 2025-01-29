let path = require('path')
//path
console.log(`The file name is - ${path.basename(__filename)}`);
console.log(`The file name is abosolute - ${path.isAbsolute(__dirname)}`);
console.log(`The resolved file name is - ${path.resolve(__filename)}`);

let {log} = require('console');

/* let os = require('os')
log(os.cpus())
log(os.hostname())
log(os.machine())
log(os.version()) */