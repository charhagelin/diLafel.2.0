import React from 'react';
import OrderList from './OrderList';
import '../Styles/OrderPage.css';


const OrderPage = (props) => {
    return(
        <div className="order-page-container">
            <h2>Your Order</h2>
            
            <OrderList
                items={props.items} 
                order={props.order} 
                deleteItem = {props.deleteItem}/>
        </div>
    )
}

export default OrderPage;