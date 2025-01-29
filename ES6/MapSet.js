let e1={id:101,name:"Mike"}
let e2 ={id:102,name:"Jay"}
let e3 ={id:103,name:"John"}

let myMap = new Map();

let add=function(a,b){
return a+b;
}
myMap.set(1,e1);
myMap.set(2,e2);
myMap.set("user","Amazon user");
myMap.set(add,"Add function");

myMap.forEach(e=>console.log(e));
console.log(myMap.size)
console.log(myMap.keys()) // returns an iterator of keys
console.log(myMap.entries()); //returns an iterator of entries
console.log(myMap.has(3)); // returns boolean

let myArr = [10,20,30,40,50];
 let mySet = new Set(myArr);
 console.log(mySet);
 let nonunique=mySet.add(7);
 console.log(nonunique);
 console.log(mySet.delete(40));
 console.log(mySet.size);

 for(let value of mySet.values()){    //values() method returns a iterator with values in insertion order!!
    console.log(value + " is the value");
 }

 for(let entry of mySet.entries()){    //entries() method is just to match MAP API and it returns a 
//iterator with array of key value pairs, basically same thing as key n value
    console.log(entry);  //[10,10] or [20,20] etc
 }

 console.log(mySet.entries());
 //**************************************************************** */
let myObj={};
 let a ={name:'a',age:30};
 let b ={};
 console.log(a.toString());
 console.log(b.toString());
 //myObj[a]='a';
 myObj[b]='b';
 myObj.a=a;
 console.log(myObj);

 let mymap2 = new Map();
 mymap2.set(a,'a');
 mymap2.set(b,'b');
 mymap2.set(1,'one');
 let deletedval = mymap2.delete(2);
 console.log(mymap2);
 console.log(deletedval);