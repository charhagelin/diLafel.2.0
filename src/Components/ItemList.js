import React, { Component } from 'react';
import '../Styles/ItemList.css';
import {Button } from 'react-bootstrap';

class ItemList extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const item = this.props.items;
        const addToOrder = this.props.addToOrder;
        const order = this.props.order;
        const index = this.props.index;
        const handleChange = this.props.handleChange;
        const value = this.props.value;


        return (
            <div className="itemlist-container">
                <div className="left-itemlist">
                    <h5 className="item-name">  {item.name} </h5>
                    <p className="item-desc">  {item.desc} </p>
                </div>
                <div className="middle-itemlist">
                    <p className="item-price">  $ {item.price} / {item.unit} </p>
                </div>

                <div className="right-itemlist">
                    < img src={item.image} className="item-image" />
                </div>
                
                <form onSubmit={this.props.addToOrder}>
                <label>Quantity</label>
                <input type="number" 
                    name= "quantity"
                    value = {value}
                    onChange = {handleChange}/>   
                    <Button onClick={() => addToOrder(index)}>Add to cart</Button>
                </form>
            </div>

        )
    }
}

export default ItemList;


    //  <p className="item-tags">  {item.tags.map(tag => <ul>{tag}</ul>)} </p>