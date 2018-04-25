import React, { Component } from 'react';
import '../Styles/Order.css';

class Order extends Component {
    constructor() {
        super()
        this.renderOrder = this.renderOrder.bind(this);
    }


    renderOrder(key) {
        const item = this.props.items[key];
        const count = this.props.order[key];

        if (count) {
            return (
                <div>
                    <p> {count} {item.unit} {item.name}</p>
                </div>

            )
        }
    }

    render() {

        const orderId = Object.keys(this.props.order)
        const total = orderId.reduce((prevTotal, key) => {
            const item = this.props.items[key];
            const count = this.props.order[key];
            if (orderId) {
                return prevTotal + (count * item.price || 0)
            }
            return prevTotal
        }, 0);
        return (
            <div>
                <li>
                    {orderId.map(this.renderOrder)}
                </li>
                <strong>Total : ${total} </strong>
            </div>
        )
    }
}

export default Order;