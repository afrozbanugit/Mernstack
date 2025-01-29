let User={
    name:'JJ',
    birthYear:2010,
    calcAge : function(){
        return new Date().getFullYear() - this.birthYear;
    },
    printDetails: function(){
        console.log(this.name + this.calcAge());
        let that = this;
        setTimeout(function(){
            console.log(this);  //refers to the context of registered API running the setTimeout
            console.log(this.birthYear);
            console.log(that.birthYear);
        },1000);
        setTimeout(()=>{
            console.log("Inside Arrow function");
            console.log(this.calcAge()); //Arrow function 'this' takes context from its parent in our case User Object
        },2000)
        setTimeout(function(){           
            console.log(this.birthYear);
        }.bind(this),3000);
    }
}

User.printDetails();

/* let functionInglobal =()=>{
    console.log("Arrow function used in global level");
    console.log(this);  //represents the empty global object here
    console.log("*****************")
}
functionInglobal(); */