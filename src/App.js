import { useReducer } from 'react';
import './Components/ToDoList.css'
import {Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout';
import {TareasCompletadas} from "./Pages/TareasCompletadas"
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element = {<Home/>}/>
         <Route path='completadas' element= {<TareasCompletadas/>} />
        </Route>
      </Routes> 
    </div>
  ); 
}

export default App;
