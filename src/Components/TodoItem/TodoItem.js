import React from 'react';
import T from 'prop-types';
import TodoList from '../TodoList/TodoList';

const TodoItem = ({ newTask, deleteLi, isDone, modalOpen }) => {
  return (
    <ul>
      <TodoList
        newTask={newTask}
        deleteLi={deleteLi}
        isDone={isDone}
        modalOpen={modalOpen}
      />
    </ul>
  );
};
TodoItem.propTypes = {
  newTask: T.arrayOf(T.shape({})).isRequired,
  deleteLi: T.func.isRequired,
  isDone: T.func.isRequired,
  modalOpen: T.func.isRequired,
};
export default TodoItem;
