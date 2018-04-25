import React, { Component } from 'react';
import '../Styles/ItemList.css';

class ItemList extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    handleChange(event) {
        this.setState({ order: event.target.value });
    }

    onSubmit(event) {
        console.log('the value ', this.event.value)
    }

    render() {
        const item = this.props.items;
        const addToOrder = this.props.addToOrder;
        const order = this.props.order;
        const index = this.props.index;


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
                <button onClick={() => addToOrder(index)}>Add to cart</button>
                <form onSubmit={this.addToOrder}>
                    <input type="number" value={order} onChange={this.handleChange} />
                    <input type="submit" value="add" />
                </form>

            </div>

        )
    }
}

export default ItemList;


    //  <p className="item-tags">  {item.tags.map(tag => <ul>{tag}</ul>)} </p>