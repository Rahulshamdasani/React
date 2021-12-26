import { createSlice } from "@reduxjs/toolkit";


const initialState = {students:""}

const studentSlice = createSlice({
    name:'student',
    initialState: initialState,
    reducers:{
        setStudents:(state,action)=>{
            // console.log("setState.",action.payload)
            state.currStudent = action.payload; 
        }
    }

});

export default studentSlice.reducer;
export const { setCurrStudent } = studentSlice.actions;