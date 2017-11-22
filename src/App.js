import React, { Component } from 'react';
import './App.css';





class Player extends React.Component {
  render() {
    return (
      <div>
        <iframe className="img-responsive text-center" title="Legends Never Die" src="https://www.youtube.com/embed/4Q46xYqUwZQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>
    );

  }
}

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <nav className="nav"></nav>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
