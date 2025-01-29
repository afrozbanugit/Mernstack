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

function* displayPopulation(currentPopulation){
    let noOfBirths=0;
    while(true){
        noOfBirths=yield(currentPopulation); // Whatever is passed as parameter of next() is stored
                                         //in variable increment and not the result of yield method
       console.log(noOfBirths);
       if(noOfBirths!=null){
        currentPopulation +=noOfBirths;
       }
    }
}
let genObj2 = displayPopulation(100000);
console.log(genObj2.next());
console.log(genObj2.next(100));
console.log(genObj2.next(200));
console.log(genObj2.next(100));

//****************************************************************** */
function *arithmetic(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));
    yield console.log("Subtraction : " + (num1-num2));
     yield console.log("Multiply : " + (num1*num2));
     yield console.log("Division : " + (num1/num2));
        
      return "Done";   //if there is a return statement, yield execution is done;
    }
    
    let calObj = arithmetic(6,2);
    
    calObj.next()
    calObj.next()
    calObj.next()
    calObj.next()
    console.log(calObj.next())
    console.log(calObj.next())