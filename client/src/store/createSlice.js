import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
    name: "Topic",
    initialState:[],
    reducers:{
        setTopics: (state, action)=>{
            return action.payload
        },
        addTopic: (state, action)=>{
            state.push(action.payload)
        },
        deleteTopic: (state, action)=>{
            const topicId = action.payload;
            return state.filter((topic) => topic._id !== topicId);
        }
    }
})

export const {setTopics, addTopic, deleteTopic} = topicSlice.actions;

export default topicSlice.reducer;