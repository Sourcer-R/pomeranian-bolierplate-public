import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { decrementBy } from '../../../Store/CounterSlice';

export const ReduxStealer = () => {
  
  const dispatch = useDispatch();
  return <div className="redux-component">
  <h2>ReduxStealer </h2>
  
  {/* <button className="redux-button">Dodaj 1</button> */}
  <button onClick={() => dispatch(decrementBy(7))} className="redux-button">Odejmij 7</button>
  <button onClick={() => dispatch(decrementBy(14))} className="redux-button">Odejmij 14</button>
</div>
};
