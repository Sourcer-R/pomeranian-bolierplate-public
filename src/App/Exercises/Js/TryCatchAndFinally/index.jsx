import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { debounce, throttle } from 'lodash';
import './styles.css';

/* API is needed to deliever an id based on provided user name length
HTML will need an input for that
*/
const api = (userName) =>
  new Promise((resolve) => {
    const mockedResponseFromServer = userName.length;
    debugger;
    setTimeout(() => {
      resolve({
        data: { id: mockedResponseFromServer },
        status: 200,
        message: 'OK',
      });
    }, 0);
  });
export const TryCatchAndFinally = () => {
  const cbApi = React.useCallback(api, []);
  const debouncedApi = React.useMemo(() => debounce(api, 1000), [cbApi]);
  const [userName, setUserName] = useState('');
  const getUserId = async (userName) => {
    if (!userName) {
      return;
    }
    try {
      const { data } = await debouncedApi(userName);
      console.log('ID użytkownika:' + data.id);
    } catch (err) {
      console.error(err);
    }
  };
  const cbGetUserId = React.useCallback(getUserId, []);
  useEffect(() => {
    getUserId(userName);
    return () => debouncedApi.cancel();
  }, [userName]);
  const handleAddName = (userName) => {
    setUserName(userName);
  };
  return (
    <div>
      {' '}
      Podaj imię{' '}
      <input
        type="text"
        value={userName}
        onChange={(event) => {
          handleAddName(event.target.value);
        }}
      />{' '}
    </div>
  );
};
