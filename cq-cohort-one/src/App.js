import React from 'react';
import './app.css'
import Login from "./Login"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuth: false
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = () => {
    const { username, password } = this.state;
    if (username === "admin" && password === "admin") {
      this.setState({
        isAuth: true
      })
    }
  }
  handleSignout = () => {
    this.setState({
      isAuth: false,
      username: "",
      password: ""
    })
  }
  handleClick = (item, index) => {
    console.log(item, index)
  }
  render() {
    const { username, password, isAuth } = this.state;
    return (
      <div className="App">
        Username:{" "}
        <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Enter Username" />
        <br />
        Password:{" "}
        <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Enter Password" />
        <br />
        {!isAuth ? (
          <button onClick={this.handleSubmit}>Sign In</button>
        ) : (
          <button onClick={this.handleSignout}>Sign Out</button>
        )}
        <h2>{username}</h2>
        <h2>{password}</h2>
        <Login isAuth={isAuth} />
        <div>
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <button key={item} onClick={() => this.handleClick(item, index)}>{item}{" "}</button>
            )
          })}
        </div>
      </div>
    )
  }
}

{ }