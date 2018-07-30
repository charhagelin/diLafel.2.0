import React, { Component } from 'react';
import '../Styles/OrderList.css';

class OrderList extends Component {
    constructor() {
        super()

        this.renderOrder = this.renderOrder.bind(this);

    }

    renderOrder(key) {

        const item = this.props.items[key];
        const count = this.props.order[key];
        const deleteItem = this.props.deleteItem;

        if (count) {
            return (
                <div className="order">
                    <li key={key}> {count} {item.unit} {item.name}                     
                      <i onClick={() => deleteItem(key)} className="far fa-times-circle"></i>
                    </li>
                </div>
            )
        }
    }

    render() {
        const orderId = Object.keys(this.props.order)
        const total = orderId.reduce((prevTotal, key) => {
            const item = this.props.items[key];
            const count = this.props.order[key];
            if (count) {
                return prevTotal + (count * item.price || 0)
            }
            return prevTotal
        }, 0);
        return (
            <div className="order">
                <strong>Total : ${total} </strong>
                <br />
                <hr />
                <div className="order-list">
                    {orderId.map(this.renderOrder)}
                </div>
            </div>
        )
    }
}

export default OrderList;


