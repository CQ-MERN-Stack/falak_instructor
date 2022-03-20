import React from 'react';
import Github from './Components/Github'
import "./app.css"

export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Github />
      </div>
    )
  }
}