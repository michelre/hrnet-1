import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeeList-slice";

const store = configureStore({
    reducer:{ employeesReducer}
})

export default store;