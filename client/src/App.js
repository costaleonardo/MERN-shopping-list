import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNav from './components/Navbar';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNav />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
