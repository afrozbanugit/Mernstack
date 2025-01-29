function printDetails(data){
    console.log(data);
}

function Account(id,name){
    this.id = id;
    this.name = name;
    this.getAccount = function(){
        getAccountDetails(printDetails,this);
    }
    var balance = function(){
        return 1000;
    }
    return balance;
}

function getAccountDetails(callbackfunction,data){
    callbackfunction(data);
}
var account1 = new Account(101,"Saira");

account1.getAccount();
console.log(account1.balance);
//getAccountDetails(printDetails,account1);

productObj = {name:'Samsung',price:"$700",year:2020}

getProductDetails(printDetails,productObj);
function getProductDetails(printDetails,data){
    printDetails(data);
}