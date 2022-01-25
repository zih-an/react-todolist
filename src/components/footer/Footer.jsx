import React, { Component } from 'react';
import "./footer.css";

export default class Footer extends Component {
  countChecked = () => {
    let cnt = 0;
    this.props.todos.forEach((todo) => {
      if(todo.done === true) cnt++;
    });
    return cnt;
  }
  render() {
    return (
      <div className="footer-wrapper">
        <span>已选择 {this.countChecked()} / {this.props.todos.length} 项</span>
        <div className="button-wrapper">
          <button onClick={this.props.clearDones}>Clear Dones</button>
          <button onClick={this.props.clearAll}>Clear All</button>
        </div>
      </div>
    );
  }
}
