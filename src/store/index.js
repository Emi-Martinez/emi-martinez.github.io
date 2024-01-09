import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./project-slice";
import formSlice from "./form-slice";
import questionsSlice from "./questions-slice";
import deviceSlice from "./device-slice";
import languageSlice from "./language-slice";

const store = configureStore({
    reducer:{
        project: projectSlice.reducer,
        form: formSlice.reducer,
        questions: questionsSlice.reducer,
        device: deviceSlice.reducer,
        language: languageSlice.reducer
    }
})

export default store