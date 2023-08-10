import { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';

export function PromiseMethodsTraining() {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  const logger = (log) => console.log(log);
  const [message, setMessage] = useState('');
  useEffect(() => {
    new Promise(() => {
      setTimeout(() => {
        setMessage ("ACTUNG!!! ERROR")
      }, 1000);
    });
  });
  return (
    <>{message}</>
    // <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
    //   <button onClick={() => fetchDataFast}> fetchDataFast</button>
    //   <button onClick={() => fetchDataLong}>fetchDataLong</button>
    //   <button onClick={() => fetchDataError}>fetchDataError</button>
    //   <button onClick={() => Promise.all([fetchDataFast(), fetchDataLong()]).then(logger)}>
    //     Get All Now!
    //   </button>
    //   <button onClick={() => Promise.allSettled([fetchDataFast(), fetchDataLong()]).then(logger)}>
    //   Get All Without Error
    //   </button>
    // </div>
  );
}
