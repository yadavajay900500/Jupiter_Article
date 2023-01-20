import { createSlice } from "@reduxjs/toolkit";



const apiSlice=createSlice({
    name:"api",
    initialState:[],
    reducers:{
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
})

export const {setProducts,setStatus}=apiSlice.actions;
export default apiSlice.reducer