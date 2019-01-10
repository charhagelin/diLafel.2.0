import React, { Component } from "react";
import "../../styles/css/ItemList.css";

class ItemList extends Component {
  constructor(props) {
    super(props);

    // this.submitChange = this.submitChange.bind(this);
  }

  render() {
    const item = this.props.items;
    const addToOrder = this.props.addToOrder;
    const deleteFromItemList = this.props.deleteFromItemList;

    return (
      <div className="itemlist-wrapper">
        <section className="item-information">
          <h3>{item.name}</h3>
          <p>
            $ {item.price} / {item.unit}
          </p>
          <p className="item-desc"> {item.desc} </p>
          <button
            onClick={e => addToOrder(this.props.index, e)}
            className="add-btn"
          >
            <i className="fas fa-cart-plus" />
          </button>
          <button
            onClick={() => deleteFromItemList(this.props.index)}
            className="delete-btn"
          >
            <i className="fas fa-times" />
          </button>
        </section>

        <section className="item-image">
          <img src={item.image} className="item-image" alt="Product_img" />
        </section>
      </div>
    );
  }
}

export default ItemList;
