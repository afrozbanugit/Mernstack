/* //Q2. As javascript is not a type safe and has auto cast feature - try showing below values 
from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 
25166665, undefined, true, "Robert Jr.", null, {}, -32767 */

var v ='Robert';
console.log(typeof v);   
v = 0.266;
console.log(typeof v);
v = false;
console.log(typeof v);
v={myname:'Test Me'};
console.log(typeof v);
v=25166665;
console.log(typeof v);
v= undefined;
console.log(typeof v);
v= null;
console.log(typeof v);
v= {};
console.log(typeof v);
v = -32767;
console.log(typeof v);

/* 3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function */

function showUserInfo(firstname,lastname,age){
    console.log(firstname,lastname,age);
}

showUserInfo('John','Smith',29);

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

function doaddition(a,b,c){
    return a+b+c;
}

console.log(doaddition(2,3,4));  // this provides us with expected result of 9
console.log(doaddition(2));   // Since we do not provide 3 parameters, JS will take default value 'undefined'
console.log(doaddition(2.3,3)); // and when we operate on undefined, we get NaN (Not a number)
console.log(doaddition("first", 2, "three")); // since the first argument is string, JS will concatenate them to a string value.

//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
// b. hoisting, 
// c. constructor function

//closure
function game(){
    var score =0;
    function increment(points){
        score += points;
    }
    function decrement(points){
        score -= points;
    }
    function getScore(){
        return score;
    }
    return {increment,decrement,getScore};
}

var result = game();  // now result will hold inner function definitions as objects.
result.increment(30); // closure helps us to access var score from outer function even after outer() is finished executing.
result.decrement(10);
console.log(result.getScore());

//Hoisting

hoist();   // calling the function before its definition
function hoist(){
    console.log(a); //var a is hoisted and holds value undefined
    var a=10;
    console.log(a);  // now actual value is stored
}

// c. constructor function

var Person = function(name,birthYear,city){
this.name = name;
this.birthYear = birthYear;
this.city = city;
this.displayInfo = function(){
    console.log(`${this.name} ${this.city}`);
}
}
var mark = new Person('Mark',2000,'Paris');
var stella = new Person('Stella',10,'Sydney');
mark.displayInfo();
stella.displayInfo();

//Q6. What is the purpose of call, apply and bind ? and why they are used ? 
//whats the difference between bind and apply ?

// The above methods help to change the context in which the functions are running.
var user1 ={
    name:'JJ',
    age:5,
    greet: function(greetMsg,timeofday){
        console.log(`${greetMsg} ${this.name}. Good ${timeofday}`)
    }
}
user1.greet("Hi there! I am ","Morning");
var user2 ={name:'John',age:40}
user1.greet.call(user2,'Welcome all, I am','Day');
user1.greet.apply(user2,['How are you doing, Iam','Thank you']);
var callLater = user1.greet.bind(user2,'Welcome all, I am','Day'); //bind helps us to hold the function definition and call later
callLater();

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

var student = {
    name:'Keith',
    graduated:false,
    major:'Science'
}
printStudentInfo(); // the context of this is global when called from here
function printStudentInfo(){
    console.log(this.name);
    console.log(this.major);
}
setTimeout(printStudentInfo.bind(student),1000);

//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?

var object1 = Object.create(null);  // we give null object as argument to create. 

//Q9. How do we merge different objects properties using Object class function

// we can use Object.merge

var acct1 = {
    id : '435629',
    accounttype :'Saving',
    balance : 5000
}
var customer1 = {
    name:'Susan',
    birthYear:2000,
    ssn:'564-990-3636',
    getSSNInfo: function (){
        return this.ssn;
    }
}

var PrimeAccount =Object.assign(customer1,acct1);
console.log(PrimeAccount.getSSNInfo());
console.log(PrimeAccount.balance);
acct1.balance =2000;
console.log(acct1.balance);
console.log(PrimeAccount.balance); // Change in acct1.balance does not affect priemeaccount object

//Q10. Create an object literal and export it to another file and import and show that there,
// by logging the value returned

var employee ={
    name:'Kingsmith',
    department:'sales',
    role:'Admin',
}

module.exports = {employee,customer1};  //The object employee is now exported. We are going to require it in basics.js