import React, { Component } from 'react';
import sampleItems from '../Data/DummyData';
// import Carousel from './Carousel';
import ItemList from './ItemList';
import Order from './Order';
import '../Styles/Products.css'

class Products extends Component {
    constructor() {
        super()

        this.addToOrder = this.addToOrder.bind(this);
        this.handleChange = this.handleChange.bind(this);

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


    // handleSubmit(event) {
    //     console.log('submitted' + this.state.value);
    //      event.preventDefault();
    //      this.setState({
    //          value: ''
    //         })
    //  }

    addToOrder(key) {
        //kopia av order ... är en spread funtion som tar kopia av state
        const order = { ...this.state.order };
        order[key] = this.state.value; 
        this.setState({ order: order });
        this.setState({
            value: ''       //nollställer mitt state 
           })
    }


    render() {
         const items = this.state.items
         const value = this.state.value
  


       
        return (
            <div className="product-wrap">
                <div className="product-item-container">
                    {Object.keys(items).map(key => <ItemList 
                        key={key} index={key} 
                        items={this.state.items[key]} 
                        addToOrder={(event) => this.addToOrder(event)} 
                        value={this.state.value} 
                        handleChange={this.handleChange}  />)}
                    <Order 
                        items={this.state.items} 
                        order={this.state.order} 
                        addToOrder={this.state.addToOrder} 
                        value={this.state.value} 
                     />
                </div>

            </div>
        )
    }
}

export default Products;

