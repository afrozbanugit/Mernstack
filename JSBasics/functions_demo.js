/* function add(a,b){
    console.log("Inside add");
    return a+b;
}
add(5,6);
var x = function multiply(a,b){
    console.log("Inside multiply " + (a*b));
    return a*b;
}
x(6,7); */

//Immediately invoked function expression -- these are used before es6 to create private members whereas
// from es6 we have block scope to create private variables
/* (function(name,age){
    var p = "This is private and not accessible anywhere else as it cant be called from anywhere else"
    console.log("Global obj is" +this);
    console.log(p);
    console.log("name and age is " + name,age);
})('keith',60) */


 var Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.getPersonDetails = function(){
        console.log("person details are " + this.name, this.age);
    }
     var privatedata = "This is private data";
     var creditcardInfo = function () {
        console.log(privatedata)
        console.log(" this points to " + this );
    }
    function getSSN(){
        console.log("Inside getSSN now ");
        console.log(privatedata + " 888-999-4444");
    }
    creditcardInfo();
    getSSN();
 //   return {creditcardInfo,getSSN}; // We should never return a closure from a constructor function because thats not what
 // a constuctor function is designed to do. Implicit Return: When you use the new keyword to call a constructor, it 
 //automatically returns the newly created object. Returning a closure from a constructor would break the expected behavior of object creation.

}

console.log(Person);
var p1 = new Person('Jo',11);
p1.gender = "Female";
p1.dob = "05/06/2000";
p1.getPersonDetails();

 var p2 ={name:'JJ',age:7}
 p2.getPersonDetails = p1.getPersonDetails;
 p2.getPersonDetails();  // see how context of this changes to JJ Person here
  
console.log("Type of Person is " + typeof Person); 

console.log(p1.gender);

//Prototype to define functions insided a constructor function -- This will help to have a single copy of function that can
//be used across all objects instead of storing the function definition inside every object instance. Also Inheritance is made
// available through prototype. Any child object can now access and change the displayInfo without affecting it

Person.prototype.displayInfo = function(){
    console.log(`${this.name} is ${this.age} years old and gender is ${this.gender}`);
}
var p3 = new Person('mark',22);
p3.gender = 'Male';
p1.displayInfo();
p3.displayInfo();

var student1 = Object.create(p1);
student1.displayInfo();
/*function A(){
    console.log("Inside function A");
    return function B(){
        console.log("Inside function B");
        return function C(){
            console.log("Inside function c");
            return function D(){
                console.log("Inside function D");
                return "Success";
            } 
        }
    }
}
var funcObjB =A();
var funcObjC = funcObjB();
var funcObjD = funcObjC();
var result = funcObjD();
console.log(result);

console.log(A()()()()); */