import { useState } from 'react';
import './styles.css';
const objectToEncode = {
  1: [],
  2: {},
  3: 1,
  4: Boolean(1),
  5: 'string',
  data: 12321321321321321321312,
};
export function JSLocalStorage() {
  const UNIQE_LOCALSTORAGE_KEY = 'nameKey';
  const UNIQUE_OBJECT_DATA_LS_KEY = 'objectUniqueKey';
  const [getLocalStorageData, setLocalStorageData] = useState('');
  const handleSave = () => {
    localStorage.setItem(UNIQE_LOCALSTORAGE_KEY, getLocalStorageData);
    return console.log('Zapisano dane w Local Storage', getLocalStorageData);
  };
  const handleRead = () => {
    const getLocalStorageNameData = localStorage.getItem(
      UNIQE_LOCALSTORAGE_KEY
    );
    return console.log(
      'Odczytano dane z Local Storage',
      getLocalStorageNameData
    );
  };
  const handleClear = () => {
    const storedData = localStorage.removeItem(UNIQE_LOCALSTORAGE_KEY);
    return console.log('Usunieto dane z Local Storage', storedData);
  };
  const stringifyObject = () => {};
  const parseJsonObject = () => {
    const objectToDecode = JSON.parse(stringifyObject());
    return console.log(objectToDecode);
  };
  parseJsonObject();
  const genericParseJsonObjects = (jsonObject) => {
    const objectToDecode = JSON.parse(jsonObject);
    return objectToDecode;
  };
  const setDataToLocalStorage = () => {
    const storedData = localStorage.setItem(
      UNIQUE_OBJECT_DATA_LS_KEY,
      stringifyObject()
    );
    return storedData;
  };
  setDataToLocalStorage();
  const getDataFromLocalStorage = () => {
    const dataFromLS = genericParseJsonObjects(
      localStorage.getItem(UNIQUE_OBJECT_DATA_LS_KEY)
    );
    console.log('decoded data with specyfic key: ', dataFromLS[5]);
    return console.log('decode data from LS - ', dataFromLS);
  };
  getDataFromLocalStorage();
  return (
    <div className="container-local-storage">
      {' '}
      <input
        type="text"
        value={getLocalStorageData}
        onChange={(event) => setLocalStorageData(event.target.value)}
      />{' '}
      <button onClick={handleSave}>Zapisz</button>{' '}
      <button onClick={handleRead}>Odczytaj</button>{' '}
      <button onClick={handleClear}>Wyczyść</button>{' '}
    </div>
  );
}
