import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
    name: 'device',
    initialState:{
        data: undefined
    },
    reducers:{
        setDevice(state, action){
            state.data = action.payload
        },
        resetDevice(state){
            state.data = undefined
        }
    }
})

export default deviceSlice
export const deviceActions = deviceSlice.actions