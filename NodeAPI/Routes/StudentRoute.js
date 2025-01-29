let express = require("express");
let studentRoute = express.Router();
let studentDataModel = require("../DataModel/StudentDataModel")

studentRoute.get("/api/getStudents",async(request,response,next)=>{
   let students = await studentDataModel.find();
   if(students.length !=0){
        response.send(students.map((student)=>student.name));
   }else{
    response.send("No Students present in database");
   }
})

studentRoute.post("/api/signinup",async(request,response,next)=>{
    let student = request.body;
    console.log(student);
    let savedStudent = await studentDataModel.findOne({name:request.body.name})
    console.log("Is student already in database? ",savedStudent? true:false);
    if(savedStudent){
        response.send("Student already in database")
    }else{
        let newStudent = new studentDataModel(request.body);
        await newStudent.save();
        response.send(newStudent);
    }
 })

module.exports=studentRoute;