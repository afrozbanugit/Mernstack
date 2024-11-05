// 1. How to preserve the immutability on my heroes list? Solve below problems using the same

// We Preserve the immutability on heroes by applying methods like map,filter,some we only create new Arrays and do not modify them in place.
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]
// a. Get heroes who are not evils
let nonEvilHeroes = heroes.filter((hero)=>!hero.isEvil);
console.log(" Non Evil Heroes ",nonEvilHeroes);

// b. Print Unique family names
let uniqueFamilies = new Set(heroes.map(hero=>hero.family));
console.log("Unique Family Names ",uniqueFamilies);

// c. Print Hero Names from given objects, and append sir in each of them before printing
let newNames = heroes.map(hero=>{ return {
            name:hero.name + " sir",
            family:hero.family,
            isEvil:hero.isEvil
        }})
console.log(newNames);

// d. Do we have any hero in Marvel Family who is not evil
let isMarvelNotEvil = heroes.some(hero=>hero.family==='Marvel' && hero.isEvil==false);
console.log("Do we have any hero in Marvel Family who is not evil " +isMarvelNotEvil) //We have 3 hero who are not evil in Marvel family.

//2 & 12. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one
let arr1=[10,20,30];
let arr2=[1,2,3,4];
let arr3=[1,2,3,4,5,6];

function getVarArgsMultiply(...args){
   // console.log(args);
    let product =args.reduce((accum,currentVal)=>{        
        return accum *= currentVal;
    },1)
    return product;
}
console.log(getVarArgsMultiply(...arr1));
console.log(getVarArgsMultiply(...arr2));
console.log(getVarArgsMultiply(...arr3));
//Using Apply
let productusingApply = getVarArgsMultiply.apply({},arr3);
console.log("Using Apply " +productusingApply);

//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
let {userDetails:{first:firstname,last:lastname},contact=9119119110} =person;
console.log(firstname);
console.log(lastname);
console.log(contact);
//4. Give me an example of const data manipulation
const bank ={
    id:100010, name:'HDFC Bank',location:'Bangalore',loans:['Student','Private','Home']
}
console.log(bank);
bank.location='Mumbai';
bank.loans.push('Gold Loans');
console.log(bank);
//5. What is the difference between for-of and for-in show with examples
productsArr =[{pid:100,name:'Book Vending Machine'},{pid:101,name:'Library Stickers'},{pid:200,name:'Digital Reader'}];

for(let i of productsArr){
    console.log(i);     //for-of prints the items in the arrays
}
for(let i in productsArr){
    console.log(i);     // for-in prints the index/key of the array --so this prints 0,1,2,3
}
// We cannot use for-of loop for Object since its not an iterator
product ={
    id:300, name:'Pro-health watch',price: 5000
}
for(const p in product){
    console.log("Key in the product is " + p + " and value its stores is " + product[p]);
}

//6. Give me an example of bind and write its usage, comparison with arrow function
// The arrow function takes its context-scope from its parent
let shop ={ name:'Anytime Grocery', 
            location:[location1={city:'Los Angeles',zipcode:70012},
                        location2={city:'Las Vegas',zipcode:89007}],
            products :['Vegetables','Fruits','Grains','Milk'],
            customerzipcode:'70001',
            getproductInfo: function(){
                console.log(this.products);
            },
            getcustomerZipcode:function(){
                return '89074';
            },
            getNearestLocation:function(){
                this.customerzipcode=this.getcustomerZipcode();
                setTimeout(()=>{
                    console.log(this.customerzipcode.at(0)==7? this.location[0] :this.location[1]);
                },1000);
                //Setting context of this using bind method
                setTimeout(function(){
                    this.customerzipcode='70000';
                    console.log(this.customerzipcode.at(0)==7? this.location[0] :this.location[1]);
                }.bind(this),1000);
            }
        }
shop.getproductInfo();
shop.getNearestLocation();

//7. Create an example showing usage of event loop in concurrent execution cycle

function A(){
    //FIFO - is followed while executing below setTimeOut and sent to registered API
    setTimeout(function cb1(){
        console.log("Inside Callback 1");
    },2000);
    setTimeout(function cb2(){
        console.log("Inside callback2");
    },2000);
    setTimeout(function cb3(){
        console.log("Inside callback 3");
    },2000);
    //Methods in call back queue sent back for execution through event loop
}
A();

//8. create an example showing usage of short hand and default param.
let age=20;
let graduated=false;
let major='Science'

let student={age,graduated,major}; //instead of {age:age,graduated:graduated,major:major}

function cumulativeGPA(presentquarter=1,quarter1=0,quarter2=0,quarter3=0,quarter4=0){
        let cgpa = (quarter1+quarter2+quarter3+quarter4)/presentquarter;
        return cgpa;
}
console.log(cumulativeGPA(2,5,5));
console.log(cumulativeGPA(3,4,4,5));

//9. Create two objects with some properties and merge them using Object method and ES6 way
let savingsAccount ={
    id:'1A4568iud', balance:5000,location:'Hyderabad'
}
let checkinAccount ={
    last_transactionDate: new Date(), location:'Chennai'
}
let mainAccount = Object.assign(savingsAccount,checkinAccount);
console.log(mainAccount);
let mainAccount2 = {...savingsAccount,...checkinAccount};
console.log(mainAccount2);

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let e1={id:101,name:"Mike"}
let e2 ={id:102,name:"Jay"}

let myMap = new Map();

let add=function(a,b){
return a+b;
}
myMap.set(1,e1);
myMap.set(2,e2);
myMap.set("user","Amazon user");
myMap.set(add,"Add function");
console.log(myMap.keys()) // returns an iterator of keys
console.log(myMap.entries()); //returns an iterator of entries
console.log(myMap.has(3)); // returns boolean
console.log(myMap.delete(1)); //returns true and deletes entry with key=1
console.log(myMap.get(2)); 
myMap.clear(); //deletes all entries
console.log(myMap.size) //0

let myArr = [10,20,30,40,50,40,50];
 let mySet = new Set(myArr);
 console.log(mySet); //has only unique values
 let nonunique=mySet.add(7);
 console.log(nonunique);
 console.log(mySet.delete(40));
 for(let value of mySet.values()){    //values() method returns a iterator with values in insertion order
    console.log(value + " is the value");
 }
mySet.clear();
 console.log(mySet.size);

 //11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
function learnES6Concepts(){
    return new Promise((resolve,reject)=>{
        let goodUnderstanding=true;    
        setTimeout(()=>{
            if(goodUnderstanding){
                resolve(['Promise','Filter-Map-Reduce-some','Map Set','Destructuring','Spread Rest','Arrow function'])
            }else{
                reject("Authentication Failed");
            }
        },2000);        
    });
}
 
let promiseObj = learnES6Concepts();
let generatorFunction = new Promise((resolve,reject)=>{
    let knowledgeOnGenerator = false;
    setTimeout(()=>{
        if(knowledgeOnGenerator){
            resolve('Basic understanding of Generator function')
        }else{
            reject("Still need hands on practice");
        }
    },3000);
});

Promise.allSettled([promiseObj,generatorFunction])
        .then((resolveddata)=>{console.log(resolveddata)})
        .catch((rejecteddata)=>{console.log(rejecteddata)});

//13. Use the question #11 to build promises using async and await - with multithread
async function ES6Concepts(){
    let resolveddata = await learnES6Concepts();
    console.log("Waiting for synchronous execution " ,resolveddata);
}

let resolveddata2 = ES6Concepts();
console.log(resolveddata2);

//14. Create an example of generator function of your choice
function* myGenerator(){
    let uniqueId=0;
    while(true){  //Since gen.next() only executes till yield - this will not go into infinite loop
        uniqueId +=1;
        console.log("In yield " + uniqueId);
        yield(uniqueId); // Everytime next() stops here        
    }
}
let genObj1 = myGenerator();
genObj1.next();
genObj1.next();

//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications
/*
Statlessness - HTTP protocol is stateless because data/state in one page is not redirected or saved when moved
to a new page.The new page does not have any idea about the previous page data.

http - Hyper Text Transfer Protocol is one of the many protocols that define standards and regulations oh how a
request respone model should be. It specifies the methods GET,PUT,POST,DELETE to perform CRUD operations.

SPA and Classical applications - SPA is Single Page application where only a particular component or part of a
web page is loaded giving users a faster latency experience than the classical applications where the entire
page is loaded everytime from the server as a respone .
*/