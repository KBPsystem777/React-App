import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





class Player extends React.Component {
  render() {
    return (
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4Q46xYqUwZQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>
    );

  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
