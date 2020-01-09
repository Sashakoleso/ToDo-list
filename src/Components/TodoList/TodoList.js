import React from 'react';
import T from 'prop-types';

const TodoList = ({ newTask, deletLI, isDone }) => {
  return (
    <>
      {newTask.map(el => (
        <li key={el.id}>
          {el.value}
          <input
            type="checkbox"
            checked={el.done}
            onChange={() => isDone(el.id)}
            // почему onChange принимает функцию а не проп?
          />
          <button type="button" onClick={() => deletLI(el.id)}>
            X
          </button>
        </li>
      ))}
    </>
  );
};
TodoList.propTypes = {
  newTask: T.arrayOf(T.shape({})).isRequired,
  deletLI: T.func.isRequired,
  isDone: T.func.isRequired,
};
export default TodoList;
