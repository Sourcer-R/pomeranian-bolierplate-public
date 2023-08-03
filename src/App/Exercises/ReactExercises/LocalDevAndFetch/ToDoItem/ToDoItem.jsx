import './ToDoItem.css';
import { formatDate } from '../../../../helpers/formatDate';
import { BinIcon } from '../BinIcon/BinIcon';
import axios from 'axios';
import { BASE_API_URL } from '..';
import { useState } from 'react';

export function ToDoItem({ todo, handleFetchToDoData }) {
  const { title, author, createdAt, note, isDone, doneDate, id } = todo;
  const [isRemoveError, setRemoveError] = useState(false);
  const itemClasses = `todo-item ${isDone ? 'todo-item--darker' : ''}`;

  function handleRemoveClick() {
    axios
      .delete(BASE_API_URL + '/todo/' + id)
      .then((response) => {
        console.log('Deleted id is', response);
        handleFetchToDoData()
      })
      .catch(() => {
        
        setRemoveError(true);
      });
  }
  return (
    //key={todo.id}
    <div className={itemClasses}>
      <div className="todo-item__wrapper">
        <h2 className="todo-item__wrapper__title">{title}</h2>
        <div className="todo-item__wrapper__text">{author}</div>

        <div className="todo-item__wrapper__text__smaller">
          {formatDate(createdAt)}
        </div>

        <p className="todo-item__text"> {note}</p>
      </div>
      <div className="todo-item__aside">
        <button
          onClick={() => handleRemoveClick()}
          className="todo-item__aside__button todo-item__aside__icon"
        >
          <BinIcon isError={isRemoveError} />
        </button>
        {isRemoveError && (
          <div className="todo-item__aside__error-message">Couldn`t delete</div>
        )}
        {isDone && (
          <>
            <div className="todo-item__aside__icon todo-item__aside__icon--checkmark ">
              {' '}
              &#10003;
            </div>
            <div> {formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}
