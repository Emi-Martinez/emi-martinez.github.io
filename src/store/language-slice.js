import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        data: "en",
        flagURL: {
            en: 'flags/USA.png',
            es: 'flags/spain.png'
        }
    },
    reducers:{
        setLanguage(state, action){
            state.data = action.payload
        }
    }
})

export default languageSlice
export const languageActions = languageSlice.actions