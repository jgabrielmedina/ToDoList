 import { useSelector } from "react-redux";
 import { useDispatch } from "react-redux";
 import {removeTaskR} from "../Reducers/taskSlice";
 import { completeTaskR } from "../Reducers/taskSlice";
 import { ordernarTasks } from "../Reducers/taskSlice";
 import {AiOutlineArrowDown} from 'react-icons/ai';
 
 
 function ToDoList (){
 const {tasks} = useSelector(state => state.task)
 const {completeTasks} = useSelector(state => state.task)

 const dispatch = useDispatch();


    return(
        <>
        <h5>Listado de tareas</h5>

        <button className="buttonPriority" onClick={()=> dispatch(ordernarTasks())} > Prioridad <AiOutlineArrowDown/></button>
        <ol className="oList">
        {tasks.map((todo)=>{    
            return (
                <li key={todo.date}>   
                <div className="mainconteiner">
                    <div className="left-mainconteiner">
                    <p className="title-left-mainconteiner"> {todo.title} </p>
                    <p className="date-left-mainconteiner"> {todo.date} </p>
                    </div>
                    <div className="right-mainconteiner">
                    <p> {todo.priority}</p>
                    </div>
                    
                </div>
                
                <button  onClick={()=> dispatch(removeTaskR(todo.date))} >Eliminar</button>
                   <button onClick={()=> dispatch(completeTaskR(todo))} >Completado</button>
                </li>
            )  
        })}
        </ol> 
        </>
    )
 }

 export default ToDoList;