 import { useSelector } from "react-redux";
 import { useDispatch } from "react-redux";
 import {removeTaskR} from "../Reducers/taskSlice";
 import { completeTaskR } from "../Reducers/taskSlice";
 
 
 function ToDoList (){
 const {tasks} = useSelector(state => state.task)
 const {completeTasks} = useSelector(state => state.task)

 const dispatch = useDispatch();


    return(
        <>
        <h5>Listado de tareas</h5>
        <ol>
        {tasks.map((todo)=>{    
            return (
                <li key={todo.date}>   
                <div>
                    {todo.title} - {todo.date} - {todo.priority}
                   <button onClick={()=> dispatch(removeTaskR(todo.date))} >Eliminar</button>
                   <button onClick={()=> dispatch(completeTaskR(todo))} >Completado</button>
                </div>
                </li>
            )  
        })}
        </ol> 
        </>
    )
 }

 export default ToDoList;