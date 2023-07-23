import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        totalCount: 0, 
        tasks:[

        ],
        completeTasks:[
        ]
    },

    reducers:{
        addTaskR: (state, action) => {
            state.totalCount = state.totalCount + 1;
            state.tasks = [...state.tasks, action.payload]
        },
        removeTaskR: (state, action)=>{
            state.totalCount -= 1;
            state.tasks = state.tasks.filter(task => task.date !== action.payload)
        },
        completeTaskR: (state, action)=>{
            state.totalCount = state.totalCount -= 1;
            state.completeTasks = [...state.completeTasks, action.payload]
            state.tasks = state.tasks.filter(task => task.date !== action.payload.date)
        } 
        
    }
})

export const {addTaskR, removeTaskR, completeTaskR} = taskSlice.actions; 

export default taskSlice.reducer; //unificacion de todos los reducers que tengo