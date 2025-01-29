var john ={name:'John', major :'Science' ,sub :['BioChem','Electronics','Physics']}
var mark ={name:'Mark', major :'Arts' ,sub :['Math','C','Analytics']}

function printData(heading){
    console.log(heading);
    console.log(`${this.name}, ${this.major} ,${this.sub}`);
}

printData('Soccer');
printData.call(john,'ScienceMajor');

var doctor = {
    name : 'leo',
    age : '35',
    speciality : 'Pediatrician',
    address1: '123 xyz ave',
    address2:{unit:'10311',zipcode:'123456'},
    displayDoctorInfo : function (){
        console.log(`${this.name}, ${this.age} ,${this.speciality}`)
    },
    hospDetails:function(){
        var hospitalName='Siena';
        console.log(hospitalName);
        console.log(`${this.address1}`);
        console.log(this.address2.unit);
    }
}

doctor.displayDoctorInfo();
doctor.hospDetails();
var doctor2 = {
    name : 'VJ',
    age : '45',
    speciality : 'Surgeon',
    address1: 'ridge street',
    address2:{unit:'122 ring',zipcode:'89076'}
}
doctor.displayDoctorInfo.call(doctor2);
doctor.hospDetails.call(doctor2);
