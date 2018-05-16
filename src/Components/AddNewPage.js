import React, {Component} from 'react';
import AddItemForm from './AddItemForm';
import { Col, Row } from 'react-bootstrap';
import '../Styles/AddNewPage.css'

class AddNewPage extends Component {
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
                <form className="inventory-form" >
                    <Row>
                        <Col xs={6} md={4}>
                        <input className="edit-item-form"
                            label="name"
                            value={item.name}
                            name= "name"
                            onChange={(e) => this.handleChange(e, key)}
                            type="text"
                            placeholder="name"
                            />
                        </Col>
                        <Col xs={6} md={4}>     
                            <input className="edit-item-form"
                                value={item.price}
                                name= "price"
                                onChange={(e) => this.handleChange(e, key)}
                                type="number"
                                placeholder="Price" 
                            />
                        </Col>
                        <Col xs={6} md={4}>      
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
                        <input className="edit-item-form"
                        value={item.tags}
                        name= "tags"
                        onChange={(e) => this.handleChange(e, key)}
                        type="text"
                        placeholder="Tags" />
                    </Col>    
                    <Col sm={12} md={6}>
                        <input className="edit-item-form"
                        value={item.image}
                        name= "image"
                        onChange={(e) => this.handleChange(e, key)}
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
            <div className="add-item-form-container">
                <AddItemForm 
                    addNewItem={this.props.addNewItem}
                />
                <h2>Inventory</h2>
                {Object.keys(this.props.items).map(this.renderInventory)}
              
            </div>
        )
    }
}

export default AddNewPage;