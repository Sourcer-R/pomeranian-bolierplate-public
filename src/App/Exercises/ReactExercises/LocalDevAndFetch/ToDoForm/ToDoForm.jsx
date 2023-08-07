import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '..';
import './ToDoForm.css';
export function ToDoForm({ setAddingMode,handleFetchToDoData }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isInProgress, setInProgress] = useState(false);

  async function handleCreateToDo() {
    try {
      setInProgress(true);
      await axios.post(BASE_API_URL + '/todo', {
        title,
        author,
        note,
      });

      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
  }
  const isReadyToSend =
    title.length > 0 && author.length > 0 && note.length > 0;
  return (
    <div className="todo-form">
      <div className="todo-form__field">
        <label className="todo-form__field__label">Title</label>
        <input
          type="text"
          placeholder="Clean Flat"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="todo-form__field">
        <label className="todo-form__field__label" htmlFor="">
          Author
        </label>
        <input
          type="text"
          placeholder="Mariam Yunis"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </div>
      <div className="todo-form__field">
        <label
          className="todo-form__field__label"
          htmlFor=""
          onChange={(event) => {
            setNote(event.target.value);
          }}
        >
          Text
        </label>
        <textarea name="" id="" cols={25} rows={5}></textarea>
      </div>

      {isInProgress && <p>Saving is in progress</p>}
      {isSuccess && <p className="todo-form__success-message">Added!</p>}
      {isError && (
        <p className="todo-form__error-message">
          There is an error, please try again!
        </p>
      )}
      <div>
        <button
          className="dark-blue-button"
          onClick={() => {
            handleFetchToDoData()
            setAddingMode(false);
          }}
        >
          CANCEL
        </button>
        <button
          className="dark-blue-button"
          onClick={() => {
            
            handleCreateToDo();
          }}
          disabled={!isReadyToSend || isInProgress}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}
