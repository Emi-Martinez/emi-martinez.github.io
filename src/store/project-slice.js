import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "projecet",
    initialState:{
        data: undefined
    },
    reducers:{
        setProject(state,action){
            const {project} = action.payload
            state.data = project
        }
    }
})

export default projectSlice
export const projectActions = projectSlice.actions