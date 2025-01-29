function asynchronousCall(){
    return new Promise((resolve,reject)=>{        
        setTimeout(()=>{
            resolve({ id:1,name:'Mark'});    
        },2000);        
    })
}

let promiseObj = asynchronousCall();
promiseObj.then((data,err)=>console.log(data))
            .catch(err=>console.error(err));
console.log("Asynchronous call starts")

async function asyncFunction(){
    let promiseObj2 = await asynchronousCall();
    console.log("Now this line awaits for the previous line execution");
    console.log(promiseObj2);
}

asyncFunction();
