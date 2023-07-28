import ToDoList from '../Components/ToDoList';
import FormRedux from '../Components/FormRedux';

export const Home = () =>{
 return(
    <>
    <div className='wrappedContainer'>
    <FormRedux/>
    <ToDoList/>
    </div>
    </>
 )
}

export default Home; 