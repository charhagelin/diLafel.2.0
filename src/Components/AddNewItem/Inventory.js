import React, { Component } from "react";
// import AddItemForm from './AddItemForm';
import "../../styles/css/Inventory.css";

class Inventory extends Component {
  constructor() {
    super();

    this.state = {
      isHidden: true
    };

    // this.renderInventory = this.renderInventory.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    const item = this.props.items;
    const key = this.props.key;

    return (
      <div className="inventory-warpper container">
        <div key={key} className="inventory-form">
          <button onClick={() => this.toggleHidden()}>
            expand - {item.name}
          </button>

          {!this.state.isHidden && (
            <span>
              <input
                className="edit-item-form"
                value={item.name}
                name="name"
                onChange={e => this.props.handleChange(e, key)}
                type="text"
                placeholder="name"
              />
              <input
                className="edit-item-form"
                value={item.price}
                name="price"
                onChange={e => this.props.handleChange(e, key)}
                type="number"
                placeholder="Price"
              />
              <select
                className="edit-item-form"
                value={item.unit}
                name="unit"
                onChange={e => this.props.handleChange(e, key)}
                placeholder="select unit"
              >
                <option value="Kg">Kg</option>
                <option value="Box">Box</option>
              </select>
              <textarea
                className="edit-item-form-textarea"
                value={item.desc}
                type="text"
                name="desc"
                onChange={e => this.props.handleChange(e, key)}
                placeholder="Description"
              />
              <input
                className="edit-item-form"
                value={item.tags}
                name="tags"
                onChange={e => this.props.handleChange(e, key)}
                type="text"
                placeholder="Tags"
              />
              <input
                className="edit-item-form"
                value={item.image}
                name="image"
                onChange={e => this.props.handleChange(e, key)}
                type="text"
                placeholder="image URL"
              />
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Inventory;
