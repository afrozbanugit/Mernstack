/* Number: Represents numeric values, including integers and floating-point numbers.
String: Represents textual data enclosed within single or double quotes.
Boolean: Represents logical values, either true or false.
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any object value.
BigInt: Represents integers with arbitrary precision (larger than the maximum safe integer value).
Symbol: Represents a unique and immutable value, often used as keys for object properties. */

//console.log(x);       // Reference Error - x is not defined.
console.log(typeof x);  //undefined

var y;
console.log(y);         //undefined
console.log(typeof y);  //undefined

var z = null;
console.log(z);         //null
console.log(typeof z);  // Object

var a = 10;
console.log(a);         //10
console.log(typeof a);  //number

var b = false;
console.log(b);         //false
console.log(typeof b);  //boolean

var s = 'xyz';
console.log(s);         //xyz
console.log(typeof s);  //string

/* JavaScript's Number type can only safely represent integers up to Number.MAX_SAFE_INTEGER (2^53 - 1). For larger integers, you need BigInt.
Operations:
You can use most arithmetic operators with BigInts, including +, -, *, /, %, and **. 
Mixing Types:
You cannot mix BigInts and Numbers in arithmetic operations directly. You need to explicitly convert one type to the other using BigInt() or Number(). */
var Big = BigInt(1234567890);
console.log(Big);         //1234567890n
console.log(typeof Big);    //bigint

var symbol_1 = Symbol("#7654A");
console.log(symbol_1);      //Symbol(#7654A)
console.log(typeof symbol_1); //symbol

// Operators

var age =20;

age>18 ? console.log("valid voter"): console.log("invalid voter");

//switch:
switch(age){
    case 5 : console.log("go to kinder");
    break;
    case 11 : console.log("Middle school");
    break;
    case 13: console.log("high school");
    break;
    default : console.log("graduated");    
    break;
}

var g = 21==="21";
console.log(g);
console.log(typeof g);

