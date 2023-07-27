import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTaskR } from "../Reducers/taskSlice";
import { completeTaskR } from "../Reducers/taskSlice";
import { ordernarTasks } from "../Reducers/taskSlice";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Anchor } from "./StyledComponents";
import { Boton } from "./StyledComponents";
import { ThemeProvider } from "styled-components";


function ToDoList() {
    const { tasks } = useSelector(state => state.task)
    const { completeTasks } = useSelector(state => state.task)

    const dispatch = useDispatch();

 const HighTheme = {
    backgroundColor : "#9D352B "
  }
 const MediumTheme = {
    backgroundColor : "#B49F3A"
  }
 const LowTheme = {
    backgroundColor : "#457078"
  }

 const priorityColors = {
    ALTA: HighTheme,
    MEDIA: MediumTheme,
    BAJA: LowTheme,
  };

return (
        <>
        <div className="main">
            <h5>Listado de tareas</h5>

            <button className="buttonPriority" onClick={() => dispatch(ordernarTasks())} > Prioridad <AiOutlineArrowDown /></button>

            <ol className="oList">
                {tasks.map((todo) => {

                    const themeColor = priorityColors[todo.priority] 

               return (
                         
                        <li key={todo.date} className="liConteiner">
                            <ThemeProvider theme={themeColor}>
                            <Anchor >
                            <div className="left-mainconteiner">
                                    <p className="title-left-mainconteiner"> {todo.title} </p>
                                    <p className="date-left-mainconteiner"> {todo.date} </p>
                                </div>
                                <div className="right-mainconteiner">
                                    <p>{todo.priority}</p>
                                </div>
                            </Anchor>
                           
                            <Boton onClick={() => dispatch(removeTaskR(todo.date))} className="boton" >Eliminar</Boton>
                            <Boton onClick={() => dispatch(completeTaskR(todo))} className="boton" >Completado</Boton>
                            </ThemeProvider>
                           
                        </li>

                    )
                })}
            </ol>

            </div>
        </>
    )
}

export default ToDoList;