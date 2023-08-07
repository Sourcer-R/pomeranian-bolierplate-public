import axios from 'axios';
import { useState } from 'react';
import { BASE_API_URL } from '..';
import './ToDoForm.css';
export function ToDoForm({ setIsFormVisible,handleFetchToDoData, data, setIdForEdit }) {
  
  const isEditMode=Boolean(data);
  const [title, setTitle] = useState(isEditMode ? data.title :'');
  const [author, setAuthor] = useState(isEditMode ? data.author:'');
  const [note, setNote] = useState(isEditMode ? data.note :'');
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
      setTitle ('')
setAuthor ('')
setNote('')
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
  }

  async function handleEditToDo() {
    try {
      setInProgress(true);
      await axios.put(BASE_API_URL + '/todo/' + data.id, {
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
     
      {!isEditMode &&  <div className="todo-form__field">
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
      </div>}
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
      {isSuccess && <p className="todo-form__success-message">{isEditMode ? <>"{title} added"</> : <>Added!</>}</p>}
      {isError && (
        <p className="todo-form__error-message">
          There is an error, please try again!
        </p>
      )}
      <div>
        <button
          className="dark-blue-button"
          onClick={() => {
            handleFetchToDoData(isEditMode ? data.id : undefined);
            setIsFormVisible(false);
            setIdForEdit(null);
          }}
        >
          CANCEL
        </button>
        <button
          className="dark-blue-button"
          onClick={() => {
            if (isEditMode) {
handleEditToDo()
            } else {
                 handleCreateToDo();
          } 
            }
          }
          disabled={!isReadyToSend || isInProgress}
        >
          {isEditMode ? "SAVE" : "ADD"}
        </button>
      </div>
    </div>
  );
}
