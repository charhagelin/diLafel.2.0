import React, { Component } from "react";
import AddItemForm from "./AddItemForm";
import Inventory from "./Inventory";
// import { Col, Row } from 'react-bootstrap';
import "../../styles/css/AddNewPage.css";

class AddNewPage extends Component {
  handleChange = (e, key) => {
    e.preventDefault();
    const item = this.props.items[key];
    const updatedItem = {
      ...item,
      [e.target.name]: e.target.value
    };
    this.props.editItem(key, updatedItem);
  };

  render() {
    return (
      <div className="add-item-form-container">
        <AddItemForm addNewItem={this.props.addNewItem} />
        <br />
        <h2>Inventory</h2>
        {Object.keys(this.props.items).map(key => (
          <Inventory
            key={key}
            index={key}
            items={this.props.items[key]}
            handleChange={e => this.props.handleChange(e, key)}
          />
        ))}
      </div>
    );
  }
}

export default AddNewPage;
