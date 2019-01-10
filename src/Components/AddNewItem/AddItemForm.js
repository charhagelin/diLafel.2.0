import React, { Component } from "react";
import "../../styles/css/AddItemForm.css";

class AddItemForm extends Component {
  createItem(event) {
    event.preventDefault();
    const item = {
      name: this.name.value,
      desc: this.desc.value,
      price: this.price.value,
      tags: this.tags.value,
      unit: this.unit.value,
      image: this.image.value
    };
    this.props.addNewItem(item);
    alert("Item has been added!");
    this.itemForm.reset();
  }

  render() {
    return (
      <div className="add-new-form container">
        <h2 className="headline__add-new-form">Add a new item to the shop:</h2>
        <form
          className="new-item-form"
          ref={input => (this.itemForm = input)}
          onSubmit={e => this.createItem(e)}
        >
          <input
            className="new-item-input"
            ref={input => (this.name = input)}
            type="text"
            placeholder="name"
            required
          />
          <textarea
            className="new-item-input"
            ref={input => (this.desc = input)}
            type="textarea"
            placeholder="Description"
            required
          />
          <input
            className="new-item-input"
            ref={input => (this.price = input)}
            type="number"
            placeholder="Price"
            required
          />
          <input
            className="new-item-input"
            ref={input => (this.tags = input)}
            type="text"
            placeholder="Tags"
          />
          <select
            className="new-item-input"
            placeholder="select"
            ref={input => (this.unit = input)}
            required
          >
            <option disabled>Select a unit</option>
            <option value="Kg">Kg</option>
            <option value="Box">Box</option>
          </select>
          <input
            className="new-item-input"
            ref={input => (this.image = input)}
            type="text"
            placeholder="image URL"
            required
          />
          <button type="submit">+ Add</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;
