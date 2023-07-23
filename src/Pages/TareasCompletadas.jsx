import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



export const TareasCompletadas = ()=>{


    const {completeTasks} = useSelector(state => state.task)

    return(

        <>
        <h5>Listado de tareas completadas</h5>
        <ol>
        {completeTasks.map((todo)=>{    
            return (
                <li key={todo.date}>   
                <div>
                    {todo.title} - {todo.date} - {todo.priority}
                </div>
                </li>
            )  
        })}
        </ol> 
        </>
       

        

    )

}



