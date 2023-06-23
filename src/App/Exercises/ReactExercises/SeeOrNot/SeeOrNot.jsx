import { isVisible } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './styles.css';

export const SeeOrNot = () => {
  const [invisible, setInvisible] = useState(true);
  const [myButton, setMyButton] = useState();

  function clickHandler() {
    setInvisible(!isVisible);
  }

  return (
    <div>
      <h1>See or not</h1>
      <button className="btn" onClick={clickHandler}>
        {' '}
        {`Ukryj`}
      </button>

      {isVisible && <h2>{`Teraz mnie widac`}</h2>}
    </div>
  );
};
