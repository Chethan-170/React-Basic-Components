import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            counter : 0
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }
    handleIncrement(){
        this.setState((state,props)=>({
            counter : this.state.counter + 1
        }))
    }
    handleDecrement(){
        this.setState((state,props)=>({
            counter : state.counter - 1
        }))
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="card text-center">
                    <div className="card-header font-weight-bold text-light bg-primary">
                        {this.props.title}
                    </div>
                    <div className="card-body">
                        <h2>The current Counter value is : <span className={(this.state.counter > 0)?"text-primary" :"text-danger"}>{this.state.counter}</span></h2>
                    </div>
                    <div className="card-footer text-muted">   
                        <button className="btn btn-md btn-outline-primary" onClick={this.handleIncrement}>Increment</button>
                        <button disabled={(this.state.counter === 0)? true : ""} className="btn btn-md btn-outline-success ml-2" onClick={this.handleDecrement}>Decrement</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Counter;