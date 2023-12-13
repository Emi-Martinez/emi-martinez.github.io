import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./project-slice";
import formSlice from "./form-slice";

const store = configureStore({
    reducer:{
        project: projectSlice.reducer,
        form: formSlice.reducer
    }
})

export default store