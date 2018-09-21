import React, { Component } from "react";
import OrderProcessForm from "./OrderProcessForm";

class OrderProcessPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <OrderProcessForm />
      </div>
    );
  }
}

export default OrderProcessPage;
