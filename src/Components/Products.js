import React, { Component } from 'react';
import sampleItems from '../Data/DummyData';
// import Carousel from './Carousel';
import ItemList from './ItemList';
import Order from './Order';
import '../Styles/Products.css';
import {Link} from 'react-router-dom';

class Products extends Component {
    constructor() {
        super()

        this.addToOrder = this.addToOrder.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // this.incrementItem = this.incrementItem.bind(this);

        this.state = {
            items: {},
            order: {},
            value: ''
        }
    }

    componentDidMount() {
        this.setState({
            items: sampleItems
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
    }

    addToOrder(key) {
        //kopia av order ... är en spread funtion som tar kopia av state
        const order = { ...this.state.order };
        order[key] = this.state.value; 
        this.setState({ order: order });
        this.setState({
            value: ''       //nollställer mitt state 
           })
    }

    deleteItem(key) {
        const order = {...this.state.order};
        order[key] = null
        this.setState({ order: order })
    }



    // incrementItem(key, prevState) {
    //     const order = { ...this.state.order };
    //     order[key] = this.prevState.order + 1 ; 
    //     this.setState({ order: order });
    // }



    render() {
         const items = this.state.items
         const value = this.state.value
  


       
        return (

            <div className="product-wrap">
                <div className= "shopping-cart-container">
                   <Link to="/order" component= {<Order 
                    items={this.state.items} 
                    order={this.state.order} 
                    addToOrder={this.state.addToOrder} 
                    deleteItem = {this.deleteItem}
                // incrementItem = {this.incrementItem}
                // value={this.state.value} 
                    />} > ORDER </Link> 
                </div>

                <div className="product-item-container">
                    {Object.keys(items).map(key => <ItemList 
                        key={key} index={key} 
                        items={this.state.items[key]} 
                        addToOrder={(event) => this.addToOrder(event)} 
                        value={this.state.value} 
                        handleChange={this.handleChange}  />)}
                </div>
            </div>
        )
    }
}

export default Products;

