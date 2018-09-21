import React, { Component } from "react";
import "../../styles/css/ItemList.css";
import { Button } from "react-bootstrap";

class ItemList extends Component {
  constructor(props) {
    super(props);

    // this.submitChange = this.submitChange.bind(this);
  }

  render() {
    const item = this.props.items;
    const addToOrder = this.props.addToOrder;
    const value = this.props.value;
    const deleteFromItemList = this.props.deleteFromItemList;

    return (
      <div className="itemlist-container">
        <div className="left-itemlist">
          <h3>{item.name}</h3>
          <p className="item-desc"> {item.desc} </p>
        </div>
        <div className="middle-itemlist">
          <p className="item-price">
            {" "}
            $ {item.price} / {item.unit}{" "}
          </p>
        </div>
        <div className="right-itemlist">
          <img src={item.image} className="item-image" alt="Product_img" />

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
        </div>
      </div>
    );
  }
}

export default ItemList;

// <input className="quantity-input"
// key={this.props.index}
// type="number"
// name="value"
// value={item.value}
// max={100}
// min={1}
// onChange={this.props.submitChange}/>

//  <p className="item-tags">  {item.tags.map(tag => <ul>{tag}</ul>)} </p>

//     <p className="item-desc">  {item.desc} </p>
// </div>
// <div className="middle-itemlist">
//     <p className="item-price">  $ {item.price} / {item.unit} </p>
// </div>

// <div className="right-itemlist">
//     < img src={item.image} className="item-image" />
//     <form onSubmit={this.props.addToOrder} className="quantity-form">
//     <label className="quantity-label">Quantity :</label>
//     <input className="quantity-input"
//         type="number"
//         name= "quantity"
//         value = {value}
//         max={100}
//         min={1}
//         onChange = {handleChange}/>
//         <Button onClick={() => addToOrder(index)} bsSize="small"><i className="fas fa-cart-plus"></i></Button>
//     </form>
// </div>
