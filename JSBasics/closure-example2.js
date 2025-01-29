function Account(accId,accType,custName){
    this.accId = accId;
    this.accType = accType;
    this.custName = custName;
    this.pwd = 'xyz';
    this.balance = 500;
   // this.pwd = (Math.random()*100).toLocaleString();
    this.getBalance = function (){
        return this.balance;
    }
    
    var getAccountDetails = function(inputPwd,acct){
        console.log(acct.pwd);
        if(inputPwd === acct.pwd){
            return {id:accId,type:accType,name:custName}
        }else{
            return console.log('Password incorrect!');
        }
    }
    return {getAccountDetails,acct:this};
}

var acct1 = new Account(111,'Savings','AA');
var acct2 = new Account(222,'Checkings','BB');

console.log(acct1.getAccountDetails('xyz',acct1.acct));
console.log(acct2.getAccountDetails('aaa',acct2.acct));