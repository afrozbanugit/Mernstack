/* 1. Dynamic Types in Java script : In Java script, variables can be different data types depending on the 
value being Stored. We do not have to explicitely mention the datatype. Also if variable stores a string 
value, we can still assign it to boolean and now it will by of type boolean.
eg: var s="john";
    s = 20==21;
    Now s will be of type boolean. 

2. Hoisting :- In Javascript, when JS file is interpreted before execution, all the global variables
and global functions will be hoisted on the execution context. It means the variables will be declared 
with default value ie undefined and functions will be declared with their definition name. This feature
helps us using the variables and function in the code even before they are actually defined. But if we
try to log the variable, it will be 'undefined' though but do not throw 'Reference Error: var is not 
defined'.

3. Scopes in Javascript : There are 3 types of scopes in JS. Global scope, function scope and block scope
(starting from ES6). The variables declared in global level belong to the global scope ie they can be 
accessed anywhere in the program and all the variables declared inside function has function scope, 
which means we cannot access it outside the function , but variables in global scope can be accessed inside
the function too. This is achieved through lexical scoping ie lexical environment variable is created for
each function and it stores all the variables. 

4. Functions in JS: Functions in Java script are considered first class citizens because they are actually
objects in JS. Because of this we can pass functions as parameter and even return a function  from a
function. Also we can use Function as a constructor function and provide us with a blue print to create
object instances.

5. Objects : Objects in JS denote real world objects that can hold some data and have behavior associated
with it. Data can be stored as properties with key-value pairs and functions inside it hold the behaviour.
Objects can be created using a constructor function, object literal and Object.create(obj) function.

6. Closures : Closures in JS is a mechanism of defining a inner function inside a function. This inner
function has access to all variables from the outer function. The inner function is accessible only when 
the outer function returns the inner function. By doing this the inner function can be called even if the 
execution context of the outer function is overand the inner function still has a way to hold variable 
values from outer function. In this way the state of those variables are maintained.

7. Callback functions : Functions when passed as argument to another function and thereby able to call that
function inside our current function is called callback functions. setTimeout and setTimeInterval are
built in examples of callback functions, where the function defined as first argument is called after a
set time period.

8. Inheritance in JS : Inheritance is one of the pillars of OOPS which means to be able to access properties
and functions defined in another object. Inheritance is made possible in JS through prototype chaining and
by creating objects using Object.create() which takes an already built object as parameter. In prototype
chaining, for eg, we can store a method in Person.prototype.calculateAge = function(){}. By doing this
any object instance (eg John) created using the Person constructor function will have access to the calculateAge method.
Also Person can access methods defined in Object prototype, this will inturn help object (John) also to
access functions from Object constructor function.

9. Object.Merge() : This method helps us to create an object that can hold value from different objects. This
method helps us eliminate any redundant data from the combining objects . Also this helps us to have a shallow
copy of the combining objects. If any data is changed in the objects, it will not reflect in our newly
created object using object.merge(). This helps with maintaining the data/values.

10. Call, Apply and Bind : These methods helps us to change the context of 'this' variable inside the
function we are executing. 'this' variable in a regular function points to global object and 'this' inside a
constructor function and object literal function will point to the object which has called those functions.
If we want the context to be changed, we can use Call, Apply or bind method, where we need to provide the
name of the object as argument on whose context we would like to call the function. When we use call and 
apply on a function, they are executed immediately where as bind will hold the function definition and we
can call it later.

*/

var employee = require('./2.test')

console.log(employee);