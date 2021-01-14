import React, { Component } from 'react';
import { Column, Row } from '../layouts/Layouts';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Row className="">
                    <Column className="col-3">
                        {this.props.product.id}
                    </Column>
                    <Column className="col-3">
                        {this.props.product.label}
                    </Column>
                    <Column className="col-3 ">
                        {this.props.product.quantity}
                    </Column>
                    <Column className="col-3">
                        <button className="btn btn-sm btn-outline-primary" onClick={()=>this.props.onIncrement(this.props.product.id)}>Add</button>
                        <button className="btn btn-sm btn-outline-danger ml-2" onClick={()=>this.props.onDelete(this.props.product.id)}>Delete</button>
                    </Column>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default Product;