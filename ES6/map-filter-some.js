let userlist1 =[{id:1, name:'Mark',age:40,job:'Doctor'},
                { id:2, name:'Mani',age:45,job:'Teacher'},
                {id:3, name:'Kiran',age:22,job:'Engineer'}
];

let filteredlist = userlist1.filter(user=>user.name.startsWith('M'));
console.log(filteredlist);

let mappedlist = userlist1.map(user=> user.name + "lucky");
console.log(mappedlist);

let booleanValue = userlist1.some(user=>user.job==='Doc');
console.log(booleanValue);

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dotnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag

console.log(persons.filter(p=>p.tags==='javascript'));
//2. List the same on person using java and put programmer after their name, 
//change the name key to Developer

let newlist = persons.map(p=>{
    if(p.id ==1){
        return {...p,tags:'mernstack'}
    }
    console.log("p ",p);
    return p;

})
console.log("New list ",newlist);
//3. If we have anyone with tag python

console.log(persons.some(p=>p.tags==='python'));
//4. Find the number of unique tags and their count present in list

let tagcount = persons.reduce((accum,currentObj)=>{
    /* console.log(accum);
    console.log(currentObj); */
    if(currentObj.tags in accum){
        accum[currentObj.tags]++;
    }else{
        accum[currentObj.tags] =1;
      //  console.log(accum);
    }
    return accum;
}, {});
console.log(tagcount);

let tagcount2 = persons.reduce((accum,currentObj)=>{
    accum[currentObj.tags] = accum[currentObj.tags]? accum[currentObj.tags]+1 : 1;
    return accum;
}, new Set());
console.log(tagcount2);