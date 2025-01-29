let userAuthentication = true;
let productsAvailable = true;
let paymentGateway = false;
let getUserAuthentication = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(userAuthentication){
            resolve({name:'Ken',loggedIn:true})
        }else{
            reject("Authentication Failed");
        }
    },1000);    
})

let getUserCart = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(productsAvailable){
        resolve(['prod1','prod2','prod3']);
    }else{
        reject("Product unavailable");
    }
},1000);
})

let userPaymentgateway = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(paymentGateway){
        resolve("Order is placed");
    }else{
        reject("Payment Denied");
    }
},1000);
})

Promise.all([getUserAuthentication,userPaymentgateway,getUserCart])
        .then((messages)=>{console.log(messages) })
        .catch((err)=>{console.log(err)});

Promise.allSettled([getUserAuthentication,userPaymentgateway,getUserCart])
        .then((messages)=>{console.log(messages) })
        .catch((err)=>{console.log(err)});