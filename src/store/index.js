import { studentReducer } from "./slices/student.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        studentStore:studentReducer
    }
})