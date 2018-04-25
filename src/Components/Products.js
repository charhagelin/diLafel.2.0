import React, { Component } from 'react';
import sampleItems from '../Data/DummyData';
import Carousel from './Carousel';
import ItemList from './ItemList';
import Order from './Order';
// import SearchBar from './SearchBar';
import '../Styles/Producs.css'

class Products extends Component {
    constructor() {
        super()

        this.addToOrder = this.addToOrder.bind(this);
        // this.showOrder = this.showOrder.bind(this);

        this.state = {
            items: {},
            order: {}
        }
    }

    componentDidMount() {

        this.setState({
            items: sampleItems
        })
    }

    addToOrder(key) {
        //kopia av order ... är en spread funtion som tar kopia av state
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order: order });
    }

    // incrimentOrder(key) {
    //     const order = { ...this.state.order };
    //     order[key] = order[key] + 1;
    //     this.setState({ order });
    // }


    render() {
        const items = this.state.items


        console.log('check me out ', this.state.items)
        return (
            <div className="product-wrap">
                <div className="product-item-container">
                    {Object.keys(items).map(key => <ItemList key={key} index={key} items={this.state.items[key]} addToOrder={this.addToOrder} incrimentOrder={this.state.order} handleChange={this.handleChange} />)}
                    <Order items={this.state.items} order={this.state.order} addToOrder={this.state.addToOrder} />
                </div>

            </div>
        )
    }
}

export default Products;

