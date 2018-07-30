import React, { Component } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import ProductsPage from "./Components/ProductsPage";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import OrderPage from "./Components/OrderPage";
import sampleItems from "./Data/DummyData";
// import ItemList from './Components/ItemList';
import { app, base } from "./base";
// import AddItemForm from './Components/AddItemForm';
import AddNewPage from "./Components/AddNewPage";
import LoginPage from "./Components/LoginPage";
import LogOut from "./Components/LogOut";

class App extends Component {
  constructor() {
    super();

    this.addToOrder = this.addToOrder.bind(this);
    // this.submitChange = this.submitChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteFromItemList = this.deleteFromItemList.bind(this);
    this.editItem = this.editItem.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    // this.signOut = this.signOut.bind(this);

    // this.incrementItem = this.incrementItem.bind(this);

    this.state = {
      items: {},
      order: {},
      value: "",
      authenticated: false,
      loading: true,
      currentUser: null
    };
  }

  componentDidMount() {
    this.setState({
      items: sampleItems
    });

    this.removeAuthListener = app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user,
          authenticated: true,
          loading: false
        });
        this.storeRef = base.syncState(`order/${user.uid}`, {
          context: this,
          state: "order"
        });
      } else {
        this.setState({
          currentUser: null,
          authenticated: false,
          loading: false
        });
        base.removeBinding(this.storeRef);
      }
    });
    this.ref = base.syncState("items", {
      context: this,
      state: "items"
    });

    // const localStorageRef = localStorage.getItem(`order`);

    //   if(localStorageRef) {
    //     this.setState({
    //       order: JSON.parse(localStorageRef)
    //     })
    //   }
  }

  componentWillUnmount() {
    this.removeAuthListener();
    base.removeBinding(this.ref, this.storeRef);
  }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem(`order`, JSON.stringify(nextState.order));
  // }

  submitChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  addNewItem(item) {
    const items = { ...this.state.items };
    const timestamp = Date.now();
    items[`item-${timestamp}`] = item;
    this.setState({ items: items });
  }

  addToOrder(key, e) {
    //kopia av order ... är en spread funtion som tar kopia av state
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    // this.state.value
    this.setState({ order: order });
    // this.setState({ value: '' })      //nollställer mitt state
  }

  deleteFromItemList(key) {
    const items = { ...this.state.items };
    items[key] = null;
    this.setState({ items: items });
  }

  editItem(key, updatedItem) {
    const items = { ...this.state.items };
    items[key] = updatedItem;
    this.setState({ items });
  }

  deleteItem(key) {
    const order = { ...this.state.order };
    order[key] = null;
    this.setState({ order: order });
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      });
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      });
    }
  }

  // singOut() {
  //   app.auth().singOut();
  // }

  render() {
    const AuthenticatedRoute = ({
      component: Component,
      authenticated,
      ...rest
    }) => (
      <Route
        {...rest}
        render={props =>
          authenticated === true ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );

    if (this.state.loading === true) {
      return (
        <div>
          <h3>Loading...</h3>
          <i className="fas fa-spinner" />
        </div>
      );
    }
    return (
      <div className="App">
        <Nav authenticated={this.state.authenticated} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <AuthenticatedRoute
            exact
            path="/products"
            component={ProductsPage}
            authenticated={this.state.authenticated}
            order={this.state.order}
            deleteItem={this.deleteItem}
            items={this.state.items}
            addToOrder={(key, e) => this.addToOrder(key, e)}
            value={this.state.value}
            submitChange={event => this.submitChange(event)}
            deleteFromItemList={key => this.deleteFromItemList(key)}
          />

          <AuthenticatedRoute
            exact
            path="/order"
            component={OrderPage}
            authenticated={this.state.authenticated}
            items={this.state.items}
            order={this.state.order}
            deleteItem={this.deleteItem}
            value={this.state.value}
            addToOrder={this.addToOrder}
            owner={this.state.owner}
          />

          <AuthenticatedRoute
            exact
            path="/admin/add-new-item"
            component={AddNewPage}
            authenticated={this.state.authenticated}
            editItem={this.editItem}
            addNewItem={this.addNewItem}
            items={this.state.items}
          />

          <Route exact path="/logout" component={LogOut} />

          <Route
            exact
            path="/login"
            render={props => {
              return (
                <LoginPage setCurrentUser={this.setCurrentUser} {...props} />
              );
            }}
          />

          <Route
            render={() => {
              return <p>404: Not Found</p>;
            }}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
