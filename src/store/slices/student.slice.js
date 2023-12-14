import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name: "student",
    initialState: {
        data: null,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        create: (state, action) => {
            state.data.push(action.payload);
        },
        update: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            });
        },
        delete: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        },
        reverseData: (state,action)=>{
            state.data?.reverse();
        }
    },
});

export const studentAction = studentSlice.actions;
export const studentReducer = studentSlice.reducer;