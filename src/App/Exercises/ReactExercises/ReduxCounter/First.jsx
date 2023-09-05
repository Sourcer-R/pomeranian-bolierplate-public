import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementBy, resetErrorMessage } from '../../../Store/CounterSlice';
import { counterSlice } from '../../../Store/CounterSlice';
import './styles.css';

export const First = () => {const errorMessage = useSelector((store) => store.counterSlice.errorMessage)
  useEffect(() => {
if (errorMessage.length > 0) {
  setTimeout(()=>{
    dispath(resetErrorMessage())
  }, 2000)
}
  }, [errorMessage])
  
  //funkcja Redux, nie musze nic zmieniac
  const dispath = useDispatch();
  const value = useSelector ((store)=> store.counterSlice.value)
  return <div className="redux-component">
  <h2>First </h2>
  <button onClick={() => dispath(increment())} className="redux-button">Dodaj 1</button>
  <div> error Message: { errorMessage }</div>
  <button onClick={() => dispath(incrementBy(5))} className="redux-button">Dodaj 5</button>
  <button onClick={() => dispath(incrementBy(10))} className="redux-button">Dodaj 10</button>
  <div>Value: {value}</div>
  
</div>
};
