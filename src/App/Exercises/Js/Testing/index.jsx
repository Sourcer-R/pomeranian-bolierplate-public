import { useState } from 'react';
import './styles.css';
import { TestToDoList } from './TestToDoList';

export function sum(a, b) {
  return a + b;
}

export const handleOnClick =(isVisible, setIsVisible)=>{
  setIsVisible(!isVisible)
}
export const Testing = () => {
  const [isVisible, setIsVisible] = useState(false);
 

  return <div>
    <h1>
      Jest Testing 
    </h1>
    <p>
      Result is {sum(2,3)}
    </p>
    <button onClick={handleOnClick}>Click Me</button>
    <p>
      Visible or Not {isVisible && <span>Jestem 👀</span> }
    </p>
    <TestToDoList />
  </div>;
};
