//Converting from string to number

console.log(Number("3.14"));        // 3.14
console.log(parseInt("3.14"));      // 3
console.log(parseFloat("3.14"));    //3.14
console.log(Number(""));            //0
console.log(Number(false));         //0
console.log(Number(true));          //1
console.log(Number(null));          //0
console.log(Number("twenty"));      //Nan
console.log(Number("John"));        //NaN

//Converting from Number to String
age = String(100);
console.log(age);
console.log(typeof age);
console.log((123).toString()); 

//Refer w3schools for more info

bb = "";  // similarly null, undefined will be converted to falsy value in boolean
if(bb){
    console.log("Empty string is converted to true");
}else{
    console.log("Empty string is converted to false");
}

cc="0";  
if(cc){
    console.log("'0' is converted to true bcos its not an empty string");
}else{
    console.log("we will not get this!");
}

var un;
if(un){
    console.log("Undefined value passed");
}else{
    console.log("Undefined is converted to false");
}
