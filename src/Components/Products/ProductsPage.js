import React, { Component } from "react";

import ItemList from "./ItemList";
import OrderList from "../Order/OrderList";
import "../../styles/css/ProductsPage.css";
import { Link } from "react-router-dom";

class ProductsPage extends Component {
  render() {
    return (
      <div className="product-page">
        <section className="order-list-small">
          <Link to="./order">Go to order</Link>
          <OrderList
            items={this.props.items}
            order={this.props.order}
            addToOrder={this.props.addToOrder}
            deleteItem={this.props.deleteItem}
          />
        </section>
        <section className="product-item-container">
          {Object.keys(this.props.items).map(key => (
            <ItemList
              key={key}
              index={key}
              items={this.props.items[key]}
              addToOrder={(index, e) => this.props.addToOrder(index, e)}
              value={this.props.value}
              submitChange={event => this.props.submitChange(event)}
              order={this.props.order}
              deleteFromItemList={index => this.props.deleteFromItemList(index)}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default ProductsPage;
