import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState:{
        data:{
            direction:"https://formsubmit.co/c04172763f95f3497e25e3abe0bbe44d",
            name: undefined,
            emailAdress: undefined,
            projectDetails: undefined,
            budgetRange: undefined,
            timeline: undefined 
        }
    },
    reducers:{
        changeForm(state,action){
            const {value,name} = action.payload

            state.data[name] = value
        },
        resetForm(state){
            state.data = {
                name: undefined,
                emailAdress: undefined,
                projectDetails: undefined,
                budgetRange: undefined,
                timeline: undefined
            }
        }
    }
})

export default formSlice
export const formActions = formSlice.actions