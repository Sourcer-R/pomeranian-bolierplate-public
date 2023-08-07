import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles.css';
import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoItem } from './ToDoItem/ToDoItem';

export const BASE_API_URL = 'http://localhost:3333/api';
export const LocalDevAndFetch = () => {
  const [toDoList, setToDoList] = useState([]);
  const [getCounter, setCounter] = useState(0);
  const [error, setError] = useState('');
  const [isAddingMode, setAddingMode]=useState(false)
  const [getNewTo, setNewToDo] = useState('');

  const handleFetchToDoData = async () => {
    const timeoutDuration = 5000;
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          timeoutDuration
        );
      });
      const response = await Promise.race([fetchDataPromise, timeoutPromise]);
      if (!response) {
        setError('Przekroczono czas oczekiwania serwera');
      }

      setToDoList(response.data);
      setError('');
    } catch (error) {
      setToDoList([]);
      setError(
        'Wystapil blas pod czas komunikacji z serwerem' + error?.message
      );
    }
  };

  useEffect(() => {
    handleFetchToDoData();
  }, []);
  //getCounter

  return (
    <div className="todo-container">
      <h1 className="todo-container__title">To Do List</h1>

      {error && <p>{error}</p>}
      {isAddingMode && <ToDoForm setAddingMode={setAddingMode}
      handleFetchToDoData={handleFetchToDoData}/> }

      {!isAddingMode &&(
        <>
      <div className="todo-container__list">
        {toDoList.length > 0 &&
          toDoList.map((todo) => {
            return (
              <ToDoItem todo={todo} key={todo.id} handleFetchToDoData={handleFetchToDoData}/>
              
            )
            
          })}
      </div>
      <button className='dark-blue-button' onClick={() => {setAddingMode(true)}}>ADD</button> </> )}
    </div>
  );
};
