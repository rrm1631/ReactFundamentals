import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter: 0,
        };
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    decrement(){
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    render(){
        return (<div>
            <h1> Count Value: {this.state.counter} </h1>
            <button onClick={()=> this.increment()}> increment </button>
            <button onClick={()=> this.decrement()}> decrement </button>
        </div>);
    }
}

export default Counter;