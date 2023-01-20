import { configureStore } from "@reduxjs/toolkit";
import apiReducers from './Slice/apiSlice'


const store = configureStore({
    reducer: {
        api: apiReducers
    }
})

export default store;