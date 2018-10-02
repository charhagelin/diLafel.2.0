import React, { Component } from "react";
import "../../styles/css/OrderList.css";

class OrderList extends Component {
  constructor() {
    super();

    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const item = this.props.items[key];
    const count = this.props.order[key];
    const deleteItem = this.props.deleteItem;

    if (count) {
      return (
        <div className="order">
          <li key={key}>
            <i
              onClick={() => deleteItem(key)}
              className="far fa-times-circle"
            />
            {count} {item.unit} {item.name}
          </li>
        </div>
      );
    }
  }

  render() {
    const orderId = Object.keys(this.props.order);
    const total = orderId.reduce((prevTotal, key) => {
      const item = this.props.items[key];
      const count = this.props.order[key];
      if (count) {
        return prevTotal + (count * item.price || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="orderlist-wrapper">
        <strong>Total : ${total} </strong>
        <br />
        <hr />
        <div className="orderlist">
          <ul>
            <li>
              {orderId.map(this.renderOrder)}{" "}
              <strong className="sum-order">Total : ${total} </strong>
            </li>
          </ul>
        </div>
        <br />
      </div>
    );
  }
}

export default OrderList;
