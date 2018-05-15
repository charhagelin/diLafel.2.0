import React, { Component } from 'react';
import sampleItems from '../Data/DummyData';
// import Carousel from './Carousel';
import ItemList from './ItemList';
import OrderPage from './OrderPage';
import OrderList from './OrderList';
import '../Styles/ProductsPage.css';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';

class ProductsPage extends Component {


    render() {
        return (
            <div className="product-wrap">
                <Col xs={12} md={2} className="order-list-small">
                    <Link to='./order'>Go to order</Link> 
                    <OrderList 
                    items={this.props.items} 
                    order={this.props.order} 
                    addToOrder={this.props.addToOrder} 
                    deleteItem = {this.props.deleteItem}
                    />
                </Col>
                <div className="product-item-container">          
                    {Object.keys(this.props.items).map(key => <ItemList 
                        key={key} index={key} 
                        items={this.props.items[key]} 
                        addToOrder={(index) => this.props.addToOrder(index)} 
                        value={this.props.value} 
                        handleChange={this.props.handleChange}
                        order={this.props.order} 
                        deleteFromItemList ={(index) => this.props.deleteFromItemList(index)}
                        />)}
                </div>
            </div>
        )
    }
}

export default ProductsPage;
