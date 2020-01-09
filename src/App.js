import React, { Component } from 'react';
import shortid from 'shortid';
import TodoEditor from './Components/TodoEditor/TodoEditor';
import TodoItem from './Components/TodoItem/TodoItem';

export default class App extends Component {
  state = {
    tasks: [],
  };

  addTask = oneTask => {
    const newTask = { id: shortid.generate(), done: false, ...oneTask };
    console.log(newTask);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  deleteTaskItem = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(el => el.id !== id),
    }));
  };

  handelChange = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(el =>
        el.id === id ? { ...el, done: !el.done } : el,
      ),
    }));
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <TodoEditor addTask={this.addTask} />
        <TodoItem
          newTask={tasks}
          deletLI={this.deleteTaskItem}
          isDone={this.handelChange}
        />
      </>
    );
  }
}
