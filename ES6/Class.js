// Task - create a class named as account accepting 3 ormore params  like - name, acct type etc and
// has three methods to show balance, user details and account offers

class Account{

    constructor(_id,_type,_balance){
        this.id = _id;
        this.type = _type;
        this.balance=_balance;
    }

    showBalance(){
        return this.balance;
    }
    getUserDetails(){
        let user={
            name:'Mark'
        }
        console.log(`${user.name} has balance ${this.showBalance()} and account type is ${this.type}`);
    }
}

let account1 =new Account(1001,'Savings',5000);
account1.getUserDetails();