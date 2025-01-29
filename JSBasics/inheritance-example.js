//Creating a person object

/* var Person = {
    name : 'Mary',
    gender : 'F',
    city : 'Mumbai',
    graduated : true,
    getPersonInfo : function (){
        return ` Name : ${this.name}
    Gender:${this.gender}
    City :${this.city}
    Graduated :${this.graduated}
    Salary :${this.salary}`
    }
}
console.log(Person.getPersonInfo());
Person.salary = 10000;
//console.log(Person.getPersonInfo());
//Creating a student object using constructor

/* var studentObj1 = new Object(Person);
studentObj1.graduated = false;
studentObj1.city = 'Bangalore';
studentObj1.salary = 500;
console.log(studentObj1.getPersonInfo());
//Now the person object reflects data from studentobj -- which should not be happening!!
console.log(Person.getPersonInfo()); */

//Inheritance achieved through Object.create()

/*var Studentobj2 = Object.create(Person);
Studentobj2.name='Jake';
Studentobj2.gender='M';
Studentobj2.graduated = false;
Studentobj2.city = 'Pune';
Studentobj2.salary = 500;
Studentobj2.getPersonInfo = function(){
    return `Name : ${this.name} Graduated : ${this.graduated}`
}
//console.log(Studentobj2.getPersonInfo());

console.log(Studentobj2.__proto__) */


//Merging of different Objects

var User = {
    name: 'valide',
    premiumMember : true,
    id: 1234,
    contact : {
        phone :'9999999999',
        email : 'abc@gmail.com'
    }
}
var Address ={
    name : 'varghese',
    id:5678,
    line1 :'street',
    line2 : 'unit#111',
    zipcode : 60310
}
var dispatch = {User,Address};
console.log(dispatch);
User.contact.phone = '8888888888';
console.log(dispatch);

var dispatch2 = Object.assign(User,Address);
console.log(dispatch2.zipcode);
User.contact.phone = '333';
Address.zipcode = 89052;
console.log(dispatch2.zipcode);
console.log(dispatch2);

var mark ={
    name:'Mark',
    age:22,
    getInfo : function(){
        return `${this.name} ${this.age}`;
    }
}

module.exports = dispatch;
module.exports = {dispatch,dispatch2,mark};