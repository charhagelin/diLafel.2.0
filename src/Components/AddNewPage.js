import React, {Component} from 'react';
import AddItemForm from './AddItemForm';
import Inventory from './Inventory';
import { Col, Row } from 'react-bootstrap';
import '../Styles/AddNewPage.css'

class AddNewPage extends Component {
    render(){
        return(
            <div className="add-item-form-container">
                <AddItemForm 
                    addNewItem={this.props.addNewItem}
                />
                <Inventory
                  items = {this.props.items}
                  editItem ={this.props.editItem} />
            </div>
        )}
}

export default AddNewPage;