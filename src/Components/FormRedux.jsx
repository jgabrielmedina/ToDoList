import { useState, useRef } from "react";
import { addTaskR } from "../Reducers/taskSlice";
import { useDispatch } from "react-redux";


function FormRedux() {

    const [inputText, setInputText]= useState("");

    const dispatch = useDispatch();
    const priority = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault();
        const prioritySelect = (priority.current.value).toUpperCase()
        dispatch(addTaskR(
            {
                title: inputText,
                date: new Date().toLocaleString(),
                priority: prioritySelect
            }
            )) 
        e.currentTarget.reset(); 
      
    }

    return (
        <>

<div>
            <form onSubmit={e => submitHandler(e)} className="formulario">
                <input type="text" onChange={e => setInputText(e.currentTarget.value)} placeholder="Añadir tarea" className="inputForm"/>

                <br />

                <label htmlFor="priority" className="labelForm" >Prioridad:</label>
                <select name="priority" id="priority" className="selectForm" ref={priority}>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select> <br />
                <button type="submit" className="buttonForm" >Agregar</button>

            </form>
            </div>
        </>
    )
}

export default FormRedux