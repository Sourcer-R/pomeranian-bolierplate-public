
import { useState, useEffect } from 'react';

import './styles.css';

export const Czas = () => { 
  const [banner, setBanner] = useState('My perfect banner 🤖');
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    let intervalId = null;
    if (!isWorking) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(() => {
        const letter = banner[banner.length - 1];
        setBanner(letter + banner.substring(0, banner.length - 1));
      }, 200);
    }

    return () => clearInterval(intervalId);
  }, [isWorking, banner]);
return (
<> 
  {
    isWorking && <button onClick={() => setIsWorking(false)}> Stop </button>
  }
  {
    !isWorking && <button onClick={() => setIsWorking(true)}> Stop </button>
  }

  <div>{banner}</div> </>);
};
