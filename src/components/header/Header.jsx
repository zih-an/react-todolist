import React, { Component } from 'react';
import "./Header.css";
export default class Header extends Component {
  addTodo = (event) => {
    const todo = event.target.value;
    if(event.keyCode !== 13 || todo === "") return;
    this.props.addTodo(todo);
    event.target.value = ""
  }
  render() {
    return (
      <div className="header-wrapper">
        <input onKeyUp={this.addTodo} type="text" name="item" id="itemInput" placeholder="Enter your task, press ENTER to add." />
      </div>
    );
  }
}



