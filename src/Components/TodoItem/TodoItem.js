import React from 'react';
import T from 'prop-types';
import TodoList from '../TodoList/TodoList';

const TodoItem = ({ newTask, deletLI, isDone }) => {
  return (
    <ul>
      <TodoList newTask={newTask} deletLI={deletLI} isDone={isDone} />
    </ul>
  );
};
TodoItem.propTypes = {
  newTask: T.arrayOf(T.shape({})).isRequired,
  deletLI: T.func.isRequired,
  isDone: T.func.isRequired,
};
export default TodoItem;
