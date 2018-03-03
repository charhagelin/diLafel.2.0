import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
