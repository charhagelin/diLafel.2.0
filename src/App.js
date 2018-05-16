import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import ProductsPage from './Components/ProductsPage';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';
import OrderPage from './Components/OrderPage';
import sampleItems from './Data/DummyData';
import ItemList from './Components/ItemList';
import { base } from './base';
import AddItemForm from './Components/AddItemForm';
import AddNewPage from './Components/AddNewPage';

class App extends Component {
  constructor() {
    super()

    this.addToOrder = this.addToOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteFromItemList = this.deleteFromItemList.bind(this);
    this.editItem = this.editItem.bind(this);

    // this.incrementItem = this.incrementItem.bind(this);

    this.state = {
        items: {},
        order: {},
        value: {}
    }
}

componentDidMount() {

  this.setState({
    items: sampleItems
})
  this.ref = base.syncState('items', {
    context:this,
    state: 'items'
  })

  const localStorageRef = localStorage.getItem(`order`);

    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
}

componentWillUnmount() {
    base.removeBinding(this.ref)
}

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem(`order`, JSON.stringify(nextState.order));
}

handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
}

addNewItem(item) {
  const items = {...this.state.items};
  const timestamp = Date.now();
  items[`item-${timestamp}`] = item;
  this.setState({ items: items })
}

addToOrder(key) {
    //kopia av order ... är en spread funtion som tar kopia av state
    const order = { ...this.state.order };
    order[key] = this.state.value; 
    this.setState({ order: order });
    this.setState({
        value: ''       //nollställer mitt state 
       })
}

deleteFromItemList(key) {
    const items = {...this.state.items};
    items[key] = null
    this.setState({ items: items })
}

editItem(key, updatedItem) {
  const items = {...this.state.items}
  items[key] = updatedItem;
  this.setState({ items })
}


deleteItem(key) {
  const order = {...this.state.order};
  delete order[key]
  this.setState({order: order})
}



  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/products" 
             render={() => <ProductsPage
              order={this.state.order}
              deleteItem={this.deleteItem}
              items={this.state.items} 
              addToOrder={(key) => this.addToOrder(key)} 
              value={this.state.value} 
              handleChange={this.handleChange}
              deleteItem={this.deleteItem} 
              deleteFromItemList = {(key) => this.deleteFromItemList(key)}/>} />

          <Route path="/order"
            render={() => <OrderPage        
            items={this.state.items} 
            order={this.state.order}
            deleteItem={this.deleteItem}
            value={this.state.value}
            addToOrder={this.addToOrder} />} />

          <Route exact path="/admin/add-new-item" 
            render={() => <AddNewPage 
              editItem = {this.editItem}
              addNewItem={this.addNewItem}
              items= {this.state.items} /> }/>     

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
