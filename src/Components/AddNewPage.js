import React, {Component} from 'react';
import AddItemForm from './AddItemForm';
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
            <div key={key}>
            <form className="inventory-form" >
            <input className="edit-item-form"
                value={item.name}
                name= "name"
                onChange={(e) => this.handleChange(e, key)}
                type="text"
                placeholder="name"
                 />
            <textarea className="edit-item-form-textarea"
                value={item.desc}
                name= "desc"
                onChange={(e) => this.handleChange(e, key)}
                type="textarea"
                placeholder="Description"
                 >
            </textarea >
            <input className="edit-item-form"
                value={item.price}
                name= "price"
                onChange={(e) => this.handleChange(e, key)}
                type="number"
                placeholder="Price" 
                 />
            <input className="edit-item-form"
                value={item.tags}
                name= "tags"
                onChange={(e) => this.handleChange(e, key)}
                type="text"
                placeholder="Tags" />
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
            <input className="edit-item-form"
                value={item.image}
                name= "image"
                onChange={(e) => this.handleChange(e, key)}
                type="text"
                placeholder="image URL"
                 />
        </form>
            </div>
        ) 
    }

    render() {
        return(
            <div className="add-item-form-container">
                <AddItemForm 
                    addNewItem={this.props.addNewItem}
                />
                {Object.keys(this.props.items).map(this.renderInventory)}

            </div>
        )
    }
}

export default AddNewPage;