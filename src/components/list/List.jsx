import React, { Component } from 'react';
import "./List.css";
import Item from "../item/Item.jsx";
export default class List extends Component {

  render() {
    const todos = this.props.todos;
    return (
      <div className="list-wrapper">
        {
          todos.map((todo) => {
            return <Item todo={todo} key={todo.id} changeTodoDone={this.props.changeTodoDone}
            deleteTodo={this.props.deleteTodo}></Item>
          })
        }
      </div>
    );
  }
}
