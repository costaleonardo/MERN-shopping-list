import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNav from './components/Navbar';
import ShoppingList from './components/ShoppingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
