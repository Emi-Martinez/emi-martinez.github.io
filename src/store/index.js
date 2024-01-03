import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./project-slice";
import formSlice from "./form-slice";
import questionsSlice from "./questions-slice";
import deviceSlice from "./device-slice";

const store = configureStore({
    reducer:{
        project: projectSlice.reducer,
        form: formSlice.reducer,
        questions: questionsSlice.reducer,
        device: deviceSlice.reducer
    }
})

export default store