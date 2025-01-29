// Spread operator will spread the content inside an array into individual elements

 let numlist1 =[10,20,30,40,50];
console.log(numlist1);  //will print the array as one object with 5 elements
console.log(...numlist1) //will print 5 individual elements. theres no more an array but just 5 values.

 let numlist2 =[100,200,...numlist1];      // we can copy an array to another array
let numlist3=[...numlist1,40,50,...numlist2]; // We can merge two arrays using spread operator
console.log(numlist3);
let user1 ={ name:'Mike',age:30,profession:'Doctor'};
console.log(user1);
let user2 = {...user1,name:'John'};     // Another way of doing Object.assign(user1);
console.log(user2);          //In case of object the elements are not spread into inidividual elements
// as it is not an iterable but they are used to assign to another object as shallow copy and at the same time
//preserves immutability in objects ie change in user1 will not affect user2.

const usersArr = [{name:'Mike',age:30,profession:'Doctor'},
    {name:'Mo',age:50,profession:'Doctor'},
    {name:'Maui',age:60,profession:'Doctor'}]

const modifiedArr = usersArr.filter((user)=>{
    return user.age!=30})
console.log("Modified arr ",modifiedArr);

//REST Operator and REST PARAMETER

//When we destructure an array or object we use REST Operator
//We can differentiate with spread because its always on left side of assignent (=)
/* let [a,b,others] = numlist2;  // this will only store with a=100,b=200 and others=10
console.log(a,b,others);
let [c,d,...others2] = numlist2;
console.log(c,d,others2); */

//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

function largesum(...num){
    console.log(num);
    console.log(...num);
    let total =num.reduce((accum,currentVal)=>{
        accum += currentVal;
        return accum;
    },0);
     return total;
}

function makeArray(initialval,lastval){
    let arr =[];
    for(let i=initialval;i<=lastval;i++){
        arr.push(i);
    }
    return arr;
}
let arr = makeArray(1,5);
console.log(arr);
console.log(largesum(...arr));