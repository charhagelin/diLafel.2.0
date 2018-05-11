import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/Order.css';

class Order extends Component {
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
                <div>
                    <p> {count} {item.unit} {item.name}                     
                      <i onClick={() => deleteItem(key)} className="far fa-times-circle"></i>
                    </p>
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
             <strong>Total : ${total} </strong>
             <br />
             <hr />
                <li className="order-list">
                    {orderId.map(this.renderOrder)}
                </li>
            </div>
        )
    }
}

export default Order;


