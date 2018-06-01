import React, { Component } from 'react';
import '../Styles/ItemList.css';
import {Button } from 'react-bootstrap';

class ItemList extends Component {
  

    render() {
        // const items = Object.keys(this.props.items);
        const item = this.props.items
        const addToOrder = this.props.addToOrder;
        // const order = this.props.order;
        // const index = this.props.index;
        const handleChange = this.props.handleChange;
        const value = this.props.value;
        const deleteFromItemList = this.props.deleteFromItemList;

        return (
            <div className="itemlist-container">
                <div className="left-itemlist">    
                <h3>{item.name}</h3> 
                <p className="item-desc">  {item.desc} </p>
             </div>
                    <div className="middle-itemlist">
                        <p className="item-price">  $ {item.price} / {item.unit} </p>
                    </div>

                    <div className="right-itemlist">
                        < img src={item.image} className="item-image" alt="Product_imag" />
                        <form onSubmit={this.props.addToOrder} className="quantity-form">
                        <label className="quantity-label">Quantity :</label>
                        <input className="quantity-input"
                            type="number" 
                            name="quantity"
                            value={value}
                            max={100}
                            min={1}
                            onChange={handleChange}/>   
                            <Button onClick={() => addToOrder(this.props.index)} bsSize="small"><i className="fas fa-cart-plus"></i></Button>
                            <Button onClick={() => deleteFromItemList(this.props.index)} bsSize="small" bsStyle="danger">
                                 <i className="fas fa-times"></i>
                            </Button>     
                        </form>
                    </div>
            </div>

        )
    }
}

export default ItemList;


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