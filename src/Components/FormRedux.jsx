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


            <form onSubmit={e => submitHandler(e)}>
                <input type="text" onChange={e => setInputText(e.currentTarget.value)} />

                <br />

                 <span>Prioridad:</span>
                <select name="priority" id="priority" ref={priority}>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select> 
                <button type="submit">Agregar</button>

            </form>
        </>
    )
}

export default FormRedux