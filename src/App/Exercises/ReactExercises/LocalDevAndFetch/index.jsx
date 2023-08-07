import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles.css';
import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoItem } from './ToDoItem/ToDoItem';

export const BASE_API_URL = 'http://localhost:3333/api';
const TIMEOUT_DURATION = 5000;
export const LocalDevAndFetch = () => {
  const [toDoList, setToDoList] = useState([]);

  const [error, setError] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [idForEdit, setIdForEdit] = useState(null);

  const handleFetchToDoData = async (givenId) => {
    const getSpecificToDoMode=Boolean(givenId)
    const urlSuffix =getSpecificToDoMode ? `/${givenId}`: '';
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo${urlSuffix}`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          TIMEOUT_DURATION
        );
      });
      const response = await Promise.race([fetchDataPromise, timeoutPromise]);
      if (!response) {
        setError('Przekroczono czas oczekiwania serwera');
      }

      
      setError('');
      if (getSpecificToDoMode){setToDoList(toDoList.map((todo)=>{
        if (todo.id === response.data.id) {
          return response.data;
        } return todo;
      }))} else {
        setToDoList(response.data);
      }
      
      
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
      {isFormVisible && (
        <ToDoForm
          setIsFormVisible={setIsFormVisible}
          handleFetchToDoData={handleFetchToDoData}
          data={toDoList.find((todo) => todo.id === idForEdit)}
          setIdForEdit={setIdForEdit}
        />
      )}

      {!isFormVisible && (
        <>
          <div className="todo-container__list">
            {toDoList.length > 0 &&
              toDoList.map((todo) => {
                return (
                  <ToDoItem
                    todo={todo}
                    key={todo.id}
                    handleFetchToDoData={handleFetchToDoData}
                    setIdForEdit={setIdForEdit}
                    setIsFormVisible={setIsFormVisible}
                  />
                );
              })}
          </div>
          <button
            className="dark-blue-button"
            onClick={() => {
              setIsFormVisible(true);
            }}
          >
            ADD
          </button>{' '}
        </>
      )}
    </div>
  );
};
