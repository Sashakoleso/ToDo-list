import React, { Component } from 'react';
import shortid from 'shortid';
import TodoEditor from './Components/TodoEditor/TodoEditor';
import TodoItem from './Components/TodoItem/TodoItem';
import Modal from './Components/Modal/Modal';

export default class App extends Component {
  state = {
    tasks: [],
    modal: false,
  };

  componentDidMount() {
    const something = localStorage.getItem('tasks');
    if (something) {
      this.setState({ tasks: JSON.parse(something) });
      console.log(something);
    }
  }

  componentDidUpdate(prevProp, prevState) {
    const { tasks } = this.state;
    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  addTask = oneTask => {
    const newTask = {
      id: shortid.generate(),
      done: false,
      ...oneTask,
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  deleteTaskItem = deleteId => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(elementLi => elementLi.id !== deleteId),
    }));
  };

  handelChange = checkboxId => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(elementLi =>
        elementLi.id === checkboxId
          ? { ...elementLi, done: !elementLi.done }
          : elementLi,
      ),
    }));
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  render() {
    const { tasks, modal } = this.state;

    return (
      <>
        <TodoEditor addTask={this.addTask} />
        <TodoItem
          newTask={tasks}
          deleteLi={this.deleteTaskItem}
          isDone={this.handelChange}
          modalOpen={this.openModal}
        />
        {modal && <Modal closeModal={this.closeModal} />}
      </>
    );
  }
}
