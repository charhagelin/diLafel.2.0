import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Form extends Component {
  render() {
    const item = this.props.items;
    const addToOrder = this.props.addToOrder;
    const value = this.props.value;
    const deleteFromItemList = this.props.deleteFromItemList;
    return (
      <form
        onSubmit={e => addToOrder(this.props.index, e)}
        className="quantity-form"
      >
        <label className="quantity-label">Quantity :</label>
        <input
          className="quantity-input"
          type="number"
          name="value"
          value={this.props.value}
          max={100}
          min={1}
          onChange={this.props.submitChange}
        />
        <Button onClick={e => addToOrder(this.props.index, e)} bsSize="small">
          <i className="fas fa-cart-plus" />
        </Button>
        <Button
          onClick={() => deleteFromItemList(this.props.index)}
          bsSize="small"
          bsStyle="danger"
        >
          <i className="fas fa-times" />
        </Button>
      </form>
    );
  }
}

export default Form;
