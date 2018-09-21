import React, { Component } from "react";
import OrderList from "./OrderList";
import "../../Styles/OrderPage.css";
import OrderProcessForm from "./OrderProcessForm";
import { Alert } from "react-bootstrap";

class OrderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      ccNumber: "",
      company: "",
      address: ""
    };

    this.handleOrder = this.handleOrder.bind(this);
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this);
  }

  handleOrder(e) {
    e.preventDefault();
    let change = { [e.target.name]: e.target.value };
    this.setState(change);
  }

  handleSubmitOrder(e) {
    e.preventDefault();
    let placeOrder = {
      name: this.state.name,
      email: this.state.email,
      ccNumber: this.state.ccNumber,
      company: this.state.company,
      address: this.state.address
    };
    this.setState(placeOrder);
    console.log(placeOrder);
    alert(
      "you've completed your order for \n `${this.props.order}` \n Thank you, {this.state.name}"
    );
  }

  render() {
    return (
      <div className="order-page-container">
        <h2>Your Order</h2>
        <div className="orderlist-container">
          <OrderList
            items={this.props.items}
            order={this.props.order}
            deleteItem={this.props.deleteItem}
          />
        </div>
        <br />
        <OrderProcessForm
          items={this.props.items}
          order={this.props.order}
          currentUser={this.props.currentUser}
          handleOrder={this.handleOrder}
          handleSubmitOrder={this.handleSubmitOrder}
          state={this.state}
        />
      </div>
    );
  }
}

export default OrderPage;
