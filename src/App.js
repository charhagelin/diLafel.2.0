import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default App;
