import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles.css';

const BASE_API_URL = 'http://localhost:3333/';
export const LocalDevAndFetch = () => {
  const [getToDoList, setToDoList] = useState([]);
const [getCounter, setCounter] =useState(0)
  const [getError, setError] = useState('');
  const [getNewTo, setNewToDo] = useState('');

  const handleFetchToDoData = async () => {
    const timeoutDuration = 5000;
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}api/todo`);
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
      setError ('');
    } catch (error) {
      setToDoList([]);
      setError(
        'Wystapil blas pod czas komunikacji z serwerem' + error?.message
      );
    }
  };

  useEffect (() => {
    handleFetchToDoData()
  }, [getCounter]);

  return (
    <div className="container-swagger">
      <button onClick={()=> setCounter(getCounter +1)}>Pobierz todos</button>
      {getError && <p>{getError}</p>}
      {getToDoList.length > 0 && (
        <ul>
          {getToDoList.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
