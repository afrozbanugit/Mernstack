let Student = {
    FirstName : "Stockholm",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

let {FirstName:firstname,lastName="Mark",TotalMarks,Subject:{Physics,Chemistry,Language,Ecology=96
}} = Student;
console.log(firstname);  //instead of Student.FirstName
console.log(TotalMarks);
console.log(Physics);   //instead of Student.Subject.Physics 
console.log(Chemistry);
console.log(Language);
console.log(Ecology);  // Newly created properties for Student throu Destructuring
console.log(lastName); // Newly created properties for Student throu Destructuring
console.log(Student);  // Newly added properties doesnt affect the Student Object


//create an array of your aspirations, print first three to achieve in 2024,25,26 
//and keep others in ...rest operator, using array destructuring 

let aspirations =["Physical Health","Family","Job Placement","Food","Upskill technically","Community service","Relationship"];
let [aspriration1,aspiration2,aspiration3,...remainingaspirations] = aspirations;
console.log(aspriration1);
console.log(aspiration2);
console.log(aspiration3);
console.log(remainingaspirations);


let Student2 = {
    FirstName : "Mark",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

let {FirstName,lastname='antony',Subject={Physics,Chemistry,Language},Session} = Student2;
console.log(FirstName);
console.log(lastname);
console.log(Physics);
console.log(Chemistry);
console.log(Session);

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

multiply = function(a=0,b=0,c=0){
    return a*b*c;
}

console.log(multiply(2,3,4));
console.log(multiply(3,4));
//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
console.log("****************")
array1 =[1,2,3,4,5];
array1[5] =6;

for(let i of array1){
    console.log(i);     //for-of prints the items in the arrays
}
for(let i in array1){
    console.log(i);     // for-in prints the index/key of the array --so this prints 0,1,2,3,4,5
}

for(let k in Student2){
    console.log("********************************")
    console.log(k);
    console.log("Key is "+ k +" value is "+ Student2[k]);    
}

/* for(let k of Student2){
    console.log(k);
} */  // We cant use for of for object since it will throw Student2 is not iterable error

//create an example of const where we can update on property of the object, where it says const is mutable

const c =5;
// c=10;  //TypeError: Assignment to constant variable. during runtime
console.log(c);

const c1 = {
    name:'Kim',
    profession:'Teacher',
    city:'Greenville'
}

c1.name='Billette';
console.log(c1);  // here we do not get error for const because c1 stores the memory address of the object
                    // and we are not changing that. We are only changing properties thats stored within
                    // that address.
//c1={ name:'Hughes',school:'Lamping'}  // Whereas this cannot be done and we get the error while running
                                        // TypeError: Assignment to constant variable.
console.log(c1);

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 

var v = 6;
//let v =7;         // will cause error
console.log(v);

{
    let v=8;
    setTimeout(function(){
        console.log("v has block scope " +v);          
    }, 1000);
    
}

setTimeout(function(){
    console.log("v in functional scope " +v);
},2000);

 // Evaluation of let and const are done before passing them to function, 
// this is different in comparison to var where the value is evaluated at the time of function execution
for(let index=1;index<=5;index++){
    setTimeout(function(){
        console.log("index value " +index);  // index var holds the value when function is defined whereas
                                            //variable defined using var gets its value during execution.
    },3000);
    
}

for(var j=1;j<=5;j++){
    setTimeout(function(){
        console.log(j);      // Since var j is functional scoped,  it is available outside of for block also.
        },4000);            // Also it gets its current value during function execution and that y it gets value 6 here.
    
}
console.log(" outside for block "+j);