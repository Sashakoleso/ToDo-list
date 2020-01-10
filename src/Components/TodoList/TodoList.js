import React from 'react';
import T from 'prop-types';
// import styles from './TodoList.module.css';

const TodoList = ({ newTask, deleteLi, isDone, modalOpen }) => {
  return (
    <>
      {newTask.map(elementLi => (
        <li key={elementLi.id}>
          {elementLi.value}
          <input
            type="checkbox"
            checked={elementLi.done}
            onChange={() => isDone(elementLi.id)}
          />
          <button type="button" onClick={() => deleteLi(elementLi.id)}>
            X
          </button>
          <button type="button" onClick={modalOpen}>
            Modal Open
          </button>
        </li>
      ))}
    </>
  );
};
TodoList.propTypes = {
  newTask: T.arrayOf(T.shape({})).isRequired,
  deleteLi: T.func.isRequired,
  isDone: T.func.isRequired,
  modalOpen: T.func.isRequired,
};
export default TodoList;
