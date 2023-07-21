import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        totalCount: 0, 
        tasks:[

        ],
    },
    reducers:{
        addTaskR: (state, action) => {
            state.totalCount = state.totalCount + 1;
            state.tasks = [...state.tasks, action.payload]
        },
        removeTaskR: (state, action)=>{
            state.totalCount -= 1;
            state.tasks = state.tasks.filter(task => task.date !== action.payload)
        }
    }
})

export const {addTaskR, removeTaskR} = taskSlice.actions; 

export default taskSlice.reducer; //unificacion de todos los reducers que tengo