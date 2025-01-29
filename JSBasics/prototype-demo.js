/* var User = function(name,id){
    this.name = name;
    this.id = id;
}
User.prototype.displayInfo = function(){
    console.log(`${this.name}  ${this.id}`);
}
User.prototype.session='Learning prototype';

var user1 = new User('John',111);
var user2 = new User('Mark',222);

user1.displayInfo();
console.log(user1.session);

user2.displayInfo();
console.log(user2.session);
console.log(user1.__proto__.session == User.prototype.session);

var dispatch = require('./inheritance-example');
//console.log(dispatch);

var {dispatch,dispatch2,mark} = require('./inheritance-example');
// console.log(dispatch);
// console.log(dispatch2);
console.log(mark.getInfo()); */

//****************************************************************

function bindDemo2(){
    console.log(this);
    console.log(`${this.name}`)
}

var mark ={
    name:'mark',
    birthYear:2002
}
var cc = bindDemo2.bind(mark);
cc();
var john ={
    name:'John',
    bindDemo:function (){
        console.log("Inside bindDemo");
        console.log(this);
        console.log(this.name);
    }
}

setTimeout(john.bindDemo.bind(john),1000);