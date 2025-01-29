let person =['john','smith',55,1987,['London','UK'],89054];

//let [firstname,lastname] = person;

let[fname, ,age1] = person;   //we skip an index by coma and space else age1 will store lastname

let [firstname, lastname,age,birthyear,[city,country]] = person;

console.log(firstname);         //console.log(person[0]);
console.log(lastname);
console.log(age);
console.log(birthyear);
console.log(city);              //console.log(person[4][0]);
console.log(country);           //console.log(person[4][1]);
console.log(person[4][1]);

let [ , , , , [city2,country2],zipcode] = person;
console.log(city2,country2,zipcode);

//how to swap two variables
let a=5;
let b=6;
[b,a] =[a,b];
console.log(a);
console.log(b);