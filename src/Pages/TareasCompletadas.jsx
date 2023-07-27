import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Anchor } from "../Components/StyledComponents";
import { Boton } from "../Components/StyledComponents";
import { removeTaskCompleteR } from "../Reducers/taskSlice";

export const TareasCompletadas = ()=>{
    const dispatch = useDispatch();
    const {completeTasks} = useSelector(state => state.task)

    const CompleteTheme = {
        backgroundColor : "green "
      }

    

    return(

        <>
        <h5 className="mainTitle">Listado de tareas completadas</h5>
        <ol className="oList completeOList">
        {completeTasks.map((todo)=>{    



            return (
                <li key={todo.date} className="liConteiner">
                <ThemeProvider theme={CompleteTheme}>
                <Anchor >
                <div className="left-mainconteiner">
                        <p className="title-left-mainconteiner"> {todo.title} (Completado)</p>
                        <p className="date-left-mainconteiner"> {todo.date} </p>
                    </div>
                    <div className="right-mainconteiner">
                        <p>{todo.priority}</p>
                    </div>
                </Anchor>
                <Boton onClick={() => dispatch(removeTaskCompleteR(todo.date))} className="boton" >Eliminar</Boton>
                </ThemeProvider>
               
            </li>
            )  
        })}
        </ol> 
        </>
       

        

    )

}



