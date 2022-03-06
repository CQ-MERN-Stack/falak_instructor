import React from "react";

export default class MyComponent extends React.Component {
  handleToggle = (e) => {
    if (e.target.id === "todo") {
      e.target.style.textDecoration = "line-through";
      e.target.id = 'done';
    }
    else{
      e.target.style.textDecoration = ""
      e.target.id = 'todo';
    }
  };
  render() {
    return (
      <>
        <form>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
        <h3>Todo List:</h3>
        <li>
          <button id="todo" onClick={this.handleToggle}>
            Buy Bread
          </button>
        </li>
        <li>
          <button id="todo" onClick={this.handleToggle}>
            Buy Milk
          </button>
        </li>
        <li>
          <button id="todo" onClick={this.handleToggle}>
            Buy Groceries
          </button>
        </li>
        <hr/>
        <h3>Done List:</h3>
      </>
    );
  }
}
