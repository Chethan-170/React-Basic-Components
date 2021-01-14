import React, { Component } from 'react';
import Product from './Product';
import {Row,Column} from '../layouts/Layouts'
class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productList :[
                {
                    id : '1',
                    label : 'Mobile',
                    quantity : 0
                },
                {
                    id : '2',
                    label : 'Laptop',
                    quantity : 0
                },
                {
                    id : '3',
                    label : 'Hard Disk',
                    quantity : 0
                },
                {
                    id : '4',
                    label : 'Pen Drives',
                    quantity : 0
                },
            ]
        }
    }
    handleIncrement = (productID) =>{
        const productList = this.state.productList.map(product =>{
            if(product.id === productID) product.quantity += 1;
            return product;
        })
        this.setState({
            productList 
        })
    }
    handleDelete = (productID) =>{
        console.log('incremented',productID)
        /*const productList = this.state.productList.filter(product=> (product.id !== productID));
        console.log(productList);
        this.setState({
            productList 
        })*/
    }
    render() { 
        return (
            <React.Fragment>
                <div className="card text-center">
                    <div className="card-header font-weight-bold text-light bg-primary">
                        {this.props.title}
                    </div>
                    <div className="card-body">
                        <Row>
                            <Column className="col-3">
                                ID
                            </Column>
                            <Column className="col-3">
                                Name 
                            </Column>
                            <Column className="col-3">
                                Quantity
                            </Column>
                            <Column className="col-3">
                                Actions
                            </Column>
                        </Row>
                        {this.state.productList.map(product=>{
                            return <Product key={product.id} product={product} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
                        })}
                    </div>
                    <div className="card-footer text-muted">   
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ShoppingList;