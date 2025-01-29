import * as ActionTypes from "../ActionTypes"
export const AddStudentToStore = (student)=>{
    return{
        type:ActionTypes.ADD_STUDENT,
        payload:student
    }
}
