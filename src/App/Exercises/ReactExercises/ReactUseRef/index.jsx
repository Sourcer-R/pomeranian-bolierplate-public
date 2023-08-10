import { useEffect } from 'react';
import { useRef } from 'react';
import './styles.css';

export const ReactUseRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="container--react-use-ref">
      <label htmlFor="">Input without useRef</label>
      <input type="text" />

      <label htmlFor="">Input with useRef</label>
      <input ref={inputRef} type="text" />
    </div>
  );
};
