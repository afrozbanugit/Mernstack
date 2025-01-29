let cars=['Benz','BMW','toyota','Honda','Lexus','Benz','Honda'];

//1. reduce is used to group the elements
let returnedObj=cars.reduce((accum,currentElement)=>{
    if(currentElement in accum){
        accum[currentElement]++
    }else{
        accum[currentElement]=1;
    }
    return accum;
},{})
console.log(returnedObj)

//2. Another example to group elements using reduce

let cars2=[
    {name:'Honda',year:2020,make:'Accord'},
    {name:'Toyota',year:2022,make:'Corolla'},
    {name:'BMW',year:2024,make:'Sports'},
    {name:'Honda',year:2022,make:'Civic'},
    {name:'Toyota',year:2020,make:'Safari'}
]
let carsbyname=cars2.reduce((accum,currentElement)=>{
    if(currentElement.name in accum){
        accum[currentElement.name]++;
    }else{
        accum[currentElement.name] =1;
    }
    return accum;
},{})
console.log(carsbyname);

//3. Another example of grouping

let carsbyyear = cars2.reduce((accum,currentElement)=>{
    console.log(accum);
   // console.log(currentElement);   
    accum[currentElement.year] = accum[currentElement.year] ? accum[currentElement.year] + 1 : 1
    return accum;
},new Set());