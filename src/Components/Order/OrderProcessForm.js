import React from "react";
import { Button } from "react-bootstrap";

const OrderProcessForm = props => {
  return (
    <div>
      <p> I confirm order here</p>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={props.state.name}
          onChange={props.handleOrder}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={props.state.email}
          onChange={props.handleOrder}
        />
        <label>Contact number</label>
        <input
          type="ccNumber"
          name="ccNumber"
          value={props.state.ccNumber}
          onChange={props.handleOrder}
        />
        <label>Company</label>
        <input
          type="text"
          name="company"
          value={props.state.company}
          onChange={props.handleOrder}
        />

        <label>Delivery Address</label>
        <input
          type="text"
          name="address"
          value={props.state.address}
          onChange={props.handleOrder}
        />
      </form>
      <Button bsStyle="success" type="submit" onClick={props.handleSubmitOrder}>
        Confirm Order
      </Button>

      {props.name}
    </div>
  );
};

export default OrderProcessForm;
