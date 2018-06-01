import React, {Component} from 'react';
// import AddItemForm from './AddItemForm';
import { Col, Row } from 'react-bootstrap';
import '../Styles/Inventory.css'

class Inventory extends Component {
    constructor () {
        super()

        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, key) {
        event.preventDefault();
        const item = this.props.items[key];
        const updatedItem = {
            ...item,
             [event.target.name]: event.target.value
            }
        this.props.editItem(key, updatedItem)
    }

    renderInventory(key) {
        const item = this.props.items[key];
    

        return (
            <div key={key} className="inventory-form-container">
                <form className="inventory-form" >
                    <Row>
                        <Col xs={6} md={4}>
                        <label>Name</label>

                        <input className="edit-item-form"
                            value={item.name}
                            name="name"
                            onChange={(event) => this.handleChange(event, key)}
                            type="text"
                            placeholder="name" />
                        </Col>
                        <Col xs={6} md={4}>   
                        <label>Price</label>
  
                            <input className="edit-item-form"
                                value={item.price}
                                name= "price"
                                onChange={(event) => this.handleChange(event, key)}
                                type="number"
                                placeholder="Price" 
                            />
                        </Col>
                        <Col xs={6} md={4}>  
                        <label>Unit</label>
    
                            <select className="edit-item-form"
                                value={item.unit}
                                name= "unit"
                                onChange={(event) => this.handleChange(event, key)} 
                                placeholder="select"
                            >
                            <option>...</option>
                            <option value="Kg">Kg</option>
                            <option value="Box">Box</option>
                        </select>
                        </Col>     
                    </Row>   
                    <label>Description</label>
     
                    <textarea className="edit-item-form-textarea"
                        value={item.desc}
                        type="text"
                        name= "desc"
                        onChange={(event) => this.handleChange(event, key)}
                        placeholder="Description"
                        >
                     </textarea >   
                   
                  <Row>
                    <Col sm={12} md={6}>
                    <label>Tags</label>

                        <input className="edit-item-form"
                        value={item.tags}
                        name= "tags"
                        onChange={(event) => this.handleChange(event, key)}
                        type="text"
                        placeholder="Tags" />
                    </Col>    
                    <Col sm={12} md={6}>
                    <label>image URL</label>

                        <input className="edit-item-form"
                        value={item.image}
                        name= "image"
                        onChange={(event) => this.handleChange(event, key)}
                        type="text"
                        placeholder="image URL"
                        />
                    </Col>    
                 </Row>
                 <hr />
                </form>
                <hr />
            </div>
        ) 
    }

    render() {
        return(
            <div className="inventory-container">
                <h2>Inventory</h2>
                {Object.keys(this.props.items).map(this.renderInventory)}
              
            </div>
        )
    }
}

export default Inventory;