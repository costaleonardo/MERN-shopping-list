import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNav from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
      </div>
    );
  }
}

export default App;
