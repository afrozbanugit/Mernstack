function A(){
    console.log("Inside A");
    setTimeout(function cb1(){
        console.log("Callback 1");
    },1000);
}
setTimeout(function cb2(){
    console.log("Inside callback2");
},2000);
setTimeout(function cb3(){
    console.log("Inside callback 3");
},1000);
A();