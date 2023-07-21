import { useReducer } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';
import FormRedux from './Components/FormRedux';


function App() {
  return (
    <div className="App">
      <FormRedux/>
      <ToDoList/>
    </div>
  );
}

export default App;
