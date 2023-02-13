import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees : []
}

const employeesSlice = createSlice({
    name: "employeesList",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
        }
    }
})

export const employeesAction = employeesSlice.actions;

export default employeesSlice.reducer;