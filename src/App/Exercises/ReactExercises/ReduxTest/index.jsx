import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile } from '../../../Store/index';
import { selectProfile } from '../../../Store/TestSlice';
import { incrementBy } from '../../../Store/CounterSlice';

import './styles.css';

export const CardDetails = () => {
  const profile = useSelector(selectProfile);
  return (
    <div>
      CardDetails {profile}
      {profile === 'business' && <div>Company Logo</div>}
    </div>
  );
};

export const Accounts = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  return (
    <div>
      Accounts
      <div>Current profile: {profile}</div>
      <button onClick={() => dispatch(toggleProfile())}>Change profile</button>
    </div>
  );
};

export const Cards = () => {
  return (
    <div>
      Cards <CardDetails />
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Accounts />
      <Cards />
    </div>
  );
};

export const ReduxTest = () => {
  const dispatch = useDispatch();
  // business, retail
  return (
    <div className="test-redux">
      Main Page
      <Dashboard />
      <button onClick={() => dispatch(incrementBy(50))} className="redux-button">Dodaj 50</button>
    </div>
  );
};