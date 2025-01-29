import React, { useEffect,useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { AddStudentToStore } from "../../state/Student/StudentActions";

export default function StudentComponent(props){

    let student = useSelector((store)=>store.StudentReducer.student);
    console.log("Student received from store ",student);
    let dispatcher = useDispatch();

    let studentNameRef = useRef(null);
    let ageRef = useRef(null);
    let departmentRef = useRef(null);
    let graduatedRef = useRef(null);

    useEffect(()=>{
        studentNameRef.current.value=student.name;
        ageRef.current.value=student.age;
        departmentRef.current.value=student.department;
        graduatedRef.current.value=student.graduated;
    },[])

let submitStudentDetails =(event)=>{
    student={name:studentNameRef.current.value,
        age:ageRef.current.value,
        department:departmentRef.current.value,
        graduated:graduatedRef.current.value}
        alert("Student being stored ", student);
    dispatcher(AddStudentToStore(student));
    event.preventDefault();
}

return(<>
<form>
<div className="col-8 justify-content-center">
  <div class="form-group">
    <label for="Name">Name</label>
    <input type="text" class="form-control" id="Name" placeholder="Enter email" ref={studentNameRef}/>
  </div>
  <div class="form-group">
    <label for="age">Age</label>
    <input type="number" class="form-control" id="age" placeholder="Age" ref={ageRef}/>
  </div>
  <div class="form-group">
    <label for="dept">Department</label>
    <input type="text" class="form-control" id="dept" placeholder="Department" ref={departmentRef}/>
  </div>
  <div class="form-group">
    <label for="isGrad">Graduated</label>
    <input type="text" class="form-control" id="isGrad" placeholder="Graduated?" ref={graduatedRef}/>
  </div>  
  <button type="submit" class="btn btn-primary" onClick={submitStudentDetails}>Submit</button>
</div>
</form>
    </>)
}