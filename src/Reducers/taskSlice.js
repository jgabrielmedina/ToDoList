import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        totalCount: 0, 
        tasks:[

        ],
        completeTasks:[
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
        },
        completeTaskR: (state, action)=>{
            state.totalCount = state.totalCount -= 1;
            state.completeTasks = [...state.completeTasks, action.payload]
            state.tasks = state.tasks.filter(task => task.date !== action.payload.date)
        },
        ordernarTasks: (state)=>{
            const tasksByPriority = state.tasks.reduce((acc, task) => {
                if (!acc[task.priority]) {
                  acc[task.priority] = [];
                }
                acc[task.priority].push(task);
                return acc;
              }, {});

              const priorities = ["ALTA", "MEDIA", "BAJA"];

              state.tasks = priorities.flatMap(priority => tasksByPriority[priority] || []);
        }
        
    }
})

export const {addTaskR, removeTaskR, completeTaskR, ordernarTasks} = taskSlice.actions; 

export default taskSlice.reducer; //unificacion de todos los reducers que tengo