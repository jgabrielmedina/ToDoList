import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "../Reducers/taskSlice"

export default configureStore({
    reducer:{
        task: taskReducer    
    }
});

