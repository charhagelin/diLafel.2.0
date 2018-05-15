import React, {Component} from 'react';
import { Col, Button } from 'react-bootstrap';
import '../Styles/AddItemForm.css';

class AddItemForm extends Component {
    constructor() {
        super()
    }

    
    createItem(event) {
        event.preventDefault();
        const item = {
            name: this.name.value,
            desc: this.desc.value,
            price: this.price.value,
            tags: this.tags.value,
            unit: this.unit.value,
            image: this.image.value
        }
        this.props.addNewItem(item);
    }

    render() {   
    return (
        <div className="add-new-form-container">
            <h2 className="add-new-form-container">Right here</h2>
            <form className="new-item-form" onSubmit={(e) => this.createItem(e)}>
                <input
                    className="new-item-input"
                    ref={(input) => this.name = input}
                    type="text"
                    placeholder="name" />
                <textarea
                    className="new-item-input"
                    ref={(input) => this.desc = input}
                    type="textarea"
                    placeholder="Description">
                </textarea >
                <input
                    className="new-item-input"
                    ref={(input) => this.price = input}
                    type="number"
                    placeholder="Price" />
                <input
                    className="new-item-input"
                    ref={(input) => this.tags = input}
                    type="text"
                    placeholder="Tags" />
                <select 
                 className="new-item-input"
                    placeholder="select"
                    ref={(input) => this.unit = input}>
                    <option value="select">Kg</option>
                    <option value="other">Box</option>
                </select>
                <input
                    className="new-item-input"
                    ref={(input) => this.image = input}
                    type="text" />
                <Button type="submit" >+ Add Item</Button>         
            </form>
        </div>
    )
}
}

export default AddItemForm;