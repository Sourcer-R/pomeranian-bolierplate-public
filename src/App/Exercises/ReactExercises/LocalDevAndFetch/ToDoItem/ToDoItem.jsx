import './ToDoItem.css';
import { formatDate } from '../../../../helpers/formatDate';
import { BinIcon } from '../BinIcon/BinIcon';

export function ToDoItem({ todo }) {
  const { title, author, createdAt, note, isDone, doneDate } = todo;
  const itemClasses = `todo-item ${
    isDone ? 'todo-item--darker' : ''
  }`;
  return (
    //key={todo.id}
    <div className={itemClasses} > 
      <div className="todo-item__wrapper">
        <h2 className="todo-item__wrapper__title">{title}</h2>
        <div className="todo-item__wrapper__text">
          {author}
        </div>

        <div className="todo-item__wrapper__text__smaller">
          {formatDate(createdAt)}
        </div>

        <p className="todo-item__text"> {note}</p>
      </div>
      <div className="todo-item__aside">
        <button className="todo-item__aside__button todo-item__aside__icon">
        <BinIcon isError={true} />
        </button>
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
