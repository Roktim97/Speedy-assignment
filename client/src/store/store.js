import { configureStore } from "@reduxjs/toolkit";
import  topicSlice from "./createSlice";

const store = configureStore({
    reducer: {
        topics: topicSlice,
    }
});

export default store;