import React from 'react';
import './app.css'
import LifecycleMethods from "./Components/LifecycleMethods"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.show && <LifecycleMethods />}
        <button onClick={this.toggle}>Click to toggle</button>
      </div>
    )
  }
}