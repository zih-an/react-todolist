import React, { Component } from 'react';
import "./Item.css";

export default class Item extends Component {
  deleteItem = () => {
    this.props.deleteTodo(this.props.todo.id);
  }
  changeDone = () => {
    this.props.changeTodoDone(this.props.todo.id);
  }
  render() {
    const todo = this.props.todo;
    return (
      <div className='item-wrapper'>
        <input type="checkbox" name="checkitm" id="" defaultChecked={todo.done} onChange={this.changeDone}/>
        <p>{todo.todo}</p>
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    );
  }
}
