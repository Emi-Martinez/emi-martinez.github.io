import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState:{
        data:{
            direction:"https://formsubmit.co/c04172763f95f3497e25e3abe0bbe44d",
            name: "",
            emailAdress: "",
            projectDetails: "",
            budgetRange: "",
            timeline: "" 
        }
    },
    reducers:{
        changeForm(state,action){
            const {value,name} = action.payload

            state.data[name] = value
        },
        resetForm(state){
            state.data = {
                name: "",
                emailAdress: "",
                projectDetails: "",
                budgetRange: "",
                timeline: ""
            }
        }
    }
})

export default formSlice
export const formActions = formSlice.actions