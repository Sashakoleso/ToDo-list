/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import shortid from 'shortid';

export default class TodoEditor extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={value}
          id={this.id}
          // checked={done}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
