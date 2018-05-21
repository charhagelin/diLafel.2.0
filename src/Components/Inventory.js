import React, {Component} from 'react';
import AddItemForm from './AddItemForm';
import { Col, Row, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import '../Styles/Inventory.css'

class Inventory extends Component {
    constructor () {
        super()

        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const item = this.props.items[key];
        const updatedItem = {
            ...item,
             [e.target.name]: e.target.value
            }
        this.props.editItem(key, updatedItem)
    }

    renderInventory(key) {
        const item = this.props.items[key];
    

        return (
            <div key={key} className="inventory-form-container">
                <Form className="inventory-form" >
                    <Row>
                        <Col xs={6} md={4}>
                        <ControlLabel>Name</ControlLabel>

                        <FormControl className="edit-item-form"
                            value={item.name}
                            name="name"
                            onChange={(e) => this.handleChange(e, key)}
                            type="text"
                            placeholder="name" />
                        </Col>
                        <Col xs={6} md={4}>   
                        <ControlLabel>Price</ControlLabel>
  
                            <FormControl className="edit-item-form"
                                value={item.price}
                                name= "price"
                                onChange={(e) => this.handleChange(e, key)}
                                type="number"
                                placeholder="Price" 
                            />
                        </Col>
                        <Col xs={6} md={4}>  
                        <ControlLabel>Unit</ControlLabel>
    
                            <select className="edit-item-form"
                                value={item.unit}
                                name= "unit"
                                onChange={(e) => this.handleChange(e, key)} 
                                placeholder="select"
                            >
                            <option>...</option>
                            <option value="Kg">Kg</option>
                            <option value="Box">Box</option>
                        </select>
                        </Col>     
                    </Row>   
                    <ControlLabel>Description</ControlLabel>
     
                    <textarea className="edit-item-form-textarea"
                        value={item.desc}
                        name= "desc"
                        onChange={(e) => this.handleChange(e, key)}
                        type="textarea"
                        placeholder="Description"
                        >
                    </textarea >
                  <Row>
                    <Col sm={12} md={6}>
                    <ControlLabel>Tags</ControlLabel>

                        <FormControl className="edit-item-form"
                        value={item.tags}
                        name= "tags"
                        onChange={(e) => this.handleChange(e, key)}
                        type="text"
                        placeholder="Tags" />
                    </Col>    
                    <Col sm={12} md={6}>
                    <ControlLabel>image URL</ControlLabel>

                        <FormControl className="edit-item-form"
                        value={item.image}
                        name= "image"
                        onChange={(e) => this.handleChange(e, key)}
                        type="text"
                        placeholder="image URL"
                        />
                    </Col>    
                 </Row>
                 <hr />
                </Form>
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