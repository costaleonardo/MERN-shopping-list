import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';

import AppNav from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNav />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
