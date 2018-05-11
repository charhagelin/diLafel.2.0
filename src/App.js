import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';
import Order from './Components/Order';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/order" component={Order} />
          <Route
            render={() => {
              return <p>404: Not Found</p>;
            }} />
        </Switch>
        <Footer />
      </div>

    );
  }
}

export default App;
