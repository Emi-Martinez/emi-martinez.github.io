import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState:{
        data: undefined
    },
    reducers:{
        setQuestions(state,action){
            const {questions} = action.payload
            state.data = questions
        }
    }
})

export default questionsSlice
export const questionsActions = questionsSlice.actions