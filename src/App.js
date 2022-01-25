import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header/Header.jsx";
import List from "./components/list/List.jsx";
import Footer from "./components/footer/Footer.jsx";

export default class App extends Component {
  state = {
    todos: [],
  };
  /* 在父亲这里写添加项目的函数，作为参数传递给Header */
  // 添加项目
  addTodo = (data) => {
    const todos = this.state.todos;
    todos.push({ id: uuidv4(), todo: data, done: false }); // id：标识； todo：事件名称；done：事件完成状态
    this.setState({ todos });
  };
  // 改变项目的完成状态
  changeTodoDone = (todoId) => {
    const todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
    });
    this.setState({ todos });
  };
  // 删除项目
  deleteTodo = (todoId) => {
    const todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoId) {
        todos.splice(i, 1);
        break;
      }
    }
    this.setState({ todos });
  };
  // 清空所有已选项目
  clearDones = () => {
    const todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done === true) {
        todos.splice(i, 1);
        i--;
        continue;
      }
    }
    this.setState({ todos });
  };
  // 清空所有项目
  clearAll = () => {
    this.setState({ todos: [] });
  };

  render() {
    return (
      <div className="app-wrapper">
        <Header addTodo={this.addTodo}></Header>
        <List
          todos={this.state.todos}
          changeTodoDone={this.changeTodoDone}
          deleteTodo={this.deleteTodo}
        ></List>
        <Footer
          todos={this.state.todos}
          clearDones={this.clearDones}
          clearAll={this.clearAll}
        ></Footer>
      </div>
    );
  }
}
