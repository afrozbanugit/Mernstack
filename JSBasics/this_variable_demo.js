var Person = function(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.displayInfo = function(){
        console.log(`${this.name} is ${this.age} years old`)
    }
}

var John = new Person('john',33,'M')
John.displayInfo();
var Mark = {
    name:'Mark', age :20
}
Mark.displayInfo = John.displayInfo;
Mark.displayInfo();

Leet ={name:'Leet', age:40,occupation:'Teacher',
    displayInfo : function(school){
        console.log(`${this.name} ${this.occupation} in ${school}`)
        console.log(this);
    }
}
Leet.displayInfo('Twitchell');
Chess = {name:'Chess', age:50, occupation:'PrekTeacher'}

/* Leet.displayInfo.call(Chess,'Vanderburg');
Leet.displayInfo.apply(Chess,['Miller']); */