import axios from "axios";

import { setTopics, addTopic, deleteTopic } from "./createSlice";

export const SetTopics = (prop) => {
    return function (dispatch){
        axios.get(`http://localhost:8000/${prop.category}`).then((response) => dispatch(setTopics(response.data)))
    }
}

export const AddTopics = (prop) => {
    return function(dispatch){
        axios.post('http://localhost:8000/addTopics', prop).then((response)=>dispatch(addTopic(response.data)))
    }
}

export const DeleteTopic = (id) => {
    return function(dispatch){
        axios.delete(`http://localhost:8000/delete/${id}`).then(()=>dispatch(deleteTopic(id)))
    }
}